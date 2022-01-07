// import { action } from "easy-peasy";
import axios from "axios";

import { createStore, action, thunk } from "easy-peasy";

export default createStore({
  searchHistory: [],
  addSearch: thunk(async (actions, ticker, keyword) => {
    const res = await axios.get(
      `https://ed89-2406-3003-206b-1f20-7d71-aab2-8b74-430.ngrok.io/companies/${ticker}`
    );
    const search = res.data;

    actions.setSearchHistory(search);
  }),
  setSearchHistory: action((state, search) => {
    state.searchHistory.push(search);
  }),
});
