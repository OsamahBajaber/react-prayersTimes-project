import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchAthan } from "./athanSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { city, date } = useSelector((state) => {
    return state.athanApi;
  });

  useEffect(() => {
    dispatch(fetchAthan());
  }, [dispatch]);

  return (
    <Stack
      marginX="3rem"
      sx={{ color: "white" }}
      spacing={2}
      alignItems="start"
      direction="column"
    >
      <h1 style={{ marginTop: "3rem", fontSize: "50px" }}>{city}</h1>
      <h3 id="date">{date || <CircularProgress />}</h3>
      <hr style={{ width: "100%" }} />
    </Stack>
  );
}
