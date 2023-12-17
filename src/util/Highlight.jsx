import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({
  popoverClass: "driverjs-theme",
  stagePadding: 0,
  onDestroyed: () => {
    document?.activeElement?.blur();
  },
});

const nik = document.getElementById("nik");
const formEl = document.querySelector("form");

nik.addEventListener("focus", () => {
  driverObj.highlight({
    element: nik,
    popover: {
      title: "Name",
      description: "Enter your name here",
    },
  });
});

formEl.addEventListener("blur", () => {
  driverObj.destroy();
});
