import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "./athanSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const city = useSelector((state) => {
    return state.athanApi.city;
  });
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);
  const handleCityChange = (e) => {
    dispatch(changeCity({ city: e.target.value }));
  };
  return (
    <select
      style={{ fontFamily: "alexandria", width: "100px", padding: "5px" }}
      value={city}
      onChange={handleCityChange}
    >
      <option>{t("Mecca")}</option>
      <option>{t("Jubail")}</option>
      <option>{t("Jeddah")}</option>
      <option>{t("Riyadh")}</option>
      <option>{t("Jazan")}</option>
      <option>{t("Al Qasim")}</option>
    </select>
  );
}
