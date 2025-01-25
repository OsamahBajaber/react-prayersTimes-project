import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "./athanSlice";

export default function Menu() {
  const city = useSelector((state) => {
    return state.athanApi.city;
  });
  const dispatch = useDispatch();
  // console.log(city);
  // const [city, setCity] = useState("مكة");
  const handleCityChange = (e) => {
    dispatch(changeCity({ city: e.target.value }));
    console.log(e.target.value);
  };
  return (
    <select
      style={{ fontFamily: "alexandria", width: "100px", padding: "5px" }}
      value={city}
      onChange={handleCityChange}
    >
      <option>Mecca</option>
      <option>Jubail</option>
      <option>Jeddah</option>
      <option>Riyadh</option>
      <option>Jazan</option>
      <option>Al Qasim</option>
    </select>
  );
}
