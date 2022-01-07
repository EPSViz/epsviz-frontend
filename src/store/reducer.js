import axios from "axios";

// const initialState = {
//   eps: [],
//   trends: [],
//   rSquare: null,
//   pValue: null,
//   nextPredictedEPS: null,
// }

const initialState = {
  json: [],
};

export default function reducer(state = initialState, action) {
  let str = JSON.stringify(action);
  console.log(str);

  if (action.type === "getData") {
    console.log(1);

    const json = axios.get(
      `http://4a8d-2406-3003-206b-1f20-c89b-ba5d-585e-4347.ngrok.io/companies/${action.payload.ticker}`
    ); // insert api link
    // return {
    //   eps: json.eps,
    //   trends: json.trends,
    //   rSquare: json.rSquare,
    //   pValue: json.pValue,
    //   nextPredictedEPS: json.nextPredictedEPS
    // }
    console.log(json);
    return state;
  } else {
    return state;
  }
}
