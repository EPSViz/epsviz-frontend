import reducer from "./reducer.js";
import { configureStore } from "@reduxjs/toolkit";

export default function store() {
  return configureStore({
    reducer,
  });
}
