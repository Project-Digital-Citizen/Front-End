import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const Date = () => {
  // const [value, setValue] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker label="tanggal lahir" />
    </LocalizationProvider>
  );
};

export default Date;
