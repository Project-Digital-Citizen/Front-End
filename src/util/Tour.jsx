// Import driver.js dan CSS-nya
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const welcomeTour = () => {
  // Konfigurasi objek driver
  const driverObj = driver({
    overlayColor: "#83a2ff",
    showProgress: true,
    nextBtnText: "Selanjutnya",
    prevBtnText: "Sebelumnya",
    doneBtnText: "Selesai",
    showButtons: ["next", "previous", "close"],
    steps: [
      {
        element: "#root",
        popover: {
          title: "Selamat Datang di Digzen",
          description:
            "Terima kasih telah menggunakan Digzen. Ini adalah panduan pertama Anda.",
          position: "bottom",
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
};

export { welcomeTour };
