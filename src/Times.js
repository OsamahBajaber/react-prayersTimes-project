import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAthan } from "./athanSlice";

export default function Times() {
  const dispatch = useDispatch();
  const { city, prayers } = useSelector((state) => state.athanApi);
  useEffect(() => {
    dispatch(fetchAthan(city));
  }, [dispatch, city]);

  return (
    <>
      <Stack
        direction="row"
        sx={{ margin: "5rem 3rem", backgroundColor: "transparent" }}
        justifyContent="space-between"
      >
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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">الفجر</h4>
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
              {prayers.fajer}
            </Typography>
          </CardContent>
        </Card>

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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">الشروق</h4>
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
              id="Sunrise"
              variant="p"
              style={{ position: "absolute", top: "50%" }}
            >
              {prayers.sunrise}
            </Typography>
          </CardContent>
        </Card>

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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">الظهر</h4>
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
              id="Dhuhr"
              variant="p"
              style={{ position: "absolute", top: "50%" }}
            >
              {prayers.dhuhr}
            </Typography>
          </CardContent>
        </Card>

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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">العصر</h4>
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
              id="Asr"
              variant="p"
              style={{ position: "absolute", top: "50%" }}
            >
              {prayers.asr}
            </Typography>
          </CardContent>
        </Card>

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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">المغرب</h4>
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
              id="Maghrib"
              variant="p"
              style={{ position: "absolute", top: "50%" }}
            >
              {prayers.maghrib}
            </Typography>
          </CardContent>
        </Card>

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
              background:
                "linear-gradient(to right, #472dbc,rgb(118, 91, 238))",
            }}
          >
            <h4 className="prayer-name">العشاء</h4>
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
              id="Isha"
              variant="p"
              style={{ position: "absolute", top: "50%" }}
            >
              {prayers.isha}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}
