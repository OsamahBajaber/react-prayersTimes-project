import Times from "./Times";
import { Stack } from "@mui/material";

export default function TimesList() {
  return (
    <>
      <Stack
        direction="row"
        sx={{ margin: "5rem 3rem", backgroundColor: "transparent" }}
        justifyContent="space-between"
      >
        <Times name="fajer" />
        <Times name="sunrise" />
        <Times name="dhuhr" />
        <Times name="asr" />
        <Times name="maghrib" />
        <Times name="isha" />
      </Stack>
    </>
  );
}
