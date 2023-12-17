import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { API } from "../../data/api-digzen";

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Mulai dengan labels kosong
    datasets: [
      {
        label: "Users",
        data: [],
      },
      {
        label: "Mailing",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lakukan fetch ke API statistik
        const response = await API.get("statistics");
        const data = response.data.data;
        // Proses data dan perbarui state chartData
        const aggregatedData = {};

        // Loop melalui data untuk menggabungkan data dengan tanggal yang sama
        data.forEach((entry) => {
          const dateKey = entry.date.substr(0, 10).split("T");
          if (!aggregatedData[dateKey]) {
            aggregatedData[dateKey] = {
              date: dateKey,
              userRegisters: 0,
              userMailings: 0,
            };
          }

          // Akumulasi data user dan mailing
          aggregatedData[dateKey].userRegisters += entry.userRegisters;
          aggregatedData[dateKey].userMailings += entry.userMailings;
        });

        // Proses data gabungan dan perbarui state chartData
        const newLabels = Object.keys(aggregatedData);
        const newUsersData = newLabels.map(
          (key) => aggregatedData[key].userRegisters
        );
        const newMailingData = newLabels.map(
          (key) => aggregatedData[key].userMailings
        );

        setChartData({
          labels: newLabels,
          datasets: [
            {
              label: "Users",
              data: newUsersData,
            },
            {
              label: "Mailing",
              data: newMailingData,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Setup interval untuk fetch setiap harinya
    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(intervalId);
  }, []);

  return <Line data={chartData} />;
};

export default Chart;
