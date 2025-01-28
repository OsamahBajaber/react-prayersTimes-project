import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAthan = createAsyncThunk(
  "athanApi/fetchAthan",
  async (city) => {
    const response = await axios.get(
      "https://api.aladhan.com/v1/timingsByCity",
      {
        params: {
          city,
          country: "SA",
        },
      }
    );

    const date = response.data.data.date.gregorian.date;

    const prayers = {
      fajer: response.data.data.timings.Fajr,
      sunrise: response.data.data.timings.Sunrise,
      dhuhr: response.data.data.timings.Dhuhr,
      asr: response.data.data.timings.Asr,
      maghrib: response.data.data.timings.Maghrib,
      isha: response.data.data.timings.Isha,
    };
    return {
      date,
      prayers,
    };
  }
);

export const athanSlice = createSlice({
  name: "athanApi",
  initialState: {
    city: "مكة المكرمة",
    date: "",
    prayers: {},
    isLoading: false,
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload.city;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAthan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAthan.fulfilled, (state, action) => {
        state.date = action.payload.date;
        state.prayers = action.payload.prayers;
        state.isLoading = false;
      });
  },
});

export const { changeCity } = athanSlice.actions;
export default athanSlice.reducer;
