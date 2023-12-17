// Import driver.js dan CSS-nya
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const welcomeTour = async (e) => {
  if (e == "drive") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const driverObj = driver({
      overlayColor: "#83a2ff",
      showProgress: true,
      nextBtnText: "Selanjutnya",
      prevBtnText: "Sebelumnya",
      doneBtnText: "Selesai",
      showButtons: ["next", "previous", "close"],
      steps: [
        {
          element: ".first",
          popover: {
            title: "Selamat Datang di Digzen",
            description:
              "Terima kasih telah menggunakan Digzen. Ini adalah panduan pertama Anda.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: ".more",
          popover: {
            title: "Langkah 1",
            description: "Tekan More untuk lanjut ke penjelasan digzen",
            position: "top",
          },
        },
        {
          element: ".digzen-def",
          popover: {
            title: "Apa itu Digzen",
            description: "Penjelasan singkat tentang digzen",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: ".ktp-def",
          popover: {
            title: "KTP",
            description: "Membuat KTP dengan mudah dan efisien",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: ".domisili-def",
          popover: {
            title: "DOMISILI",
            description: "Membuat Surat Domisili dengan mudah dan efisien",
            side: "bottom",
            align: "start",
          },
        },
      ],
    });

    driverObj.drive();
  } else if (e == "exit") {
    driver.destroy();
  }
};

const ktpTour = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const driverObj = driver({
    overlayColor: "#83a2ff",
    showProgress: true,
    nextBtnText: "Selanjutnya",
    prevBtnText: "Sebelumnya",
    doneBtnText: "Selesai",
    showButtons: ["next", "previous", "close"],
    steps: [
      {
        element: ".nikEl",
        popover: {
          title: "Animated Tour Example",
          description:
            "Here is the code example showing animated tour. Let's walk you through it.",
          side: "left",
          align: "start",
        },
      },
    ],
  });

  driverObj.drive();
};

export { welcomeTour, ktpTour };
