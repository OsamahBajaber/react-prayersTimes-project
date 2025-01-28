import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchAthan } from "./athanSlice";

export default function Times({ name }) {
  const dispatch = useDispatch();
  const { city, prayers } = useSelector((state) => state.athanApi);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);

  useEffect(() => {
    dispatch(fetchAthan(city));
  }, [dispatch, city]);

  return (
    <>
      <Card
        sx={{
          width: "15%",
          height: "100px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            background: "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
          }}
        >
          <h4 className="prayer-name">{t(name)}</h4>
        </div>
        <CardContent
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            id="Fajr"
            variant="p"
            style={{ position: "absolute", top: "50%" }}
          >
            {prayers[name]}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
