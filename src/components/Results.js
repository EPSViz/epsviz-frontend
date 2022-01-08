import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useStoreState } from "easy-peasy";

const beatOrMiss = (lower, upper, consensus) => {
  if (lower < consensus) {
    return "Beat";
  } else if (upper < consensus) {
    return "Miss";
  } else {
    return "Coinflip";
  }
};

export default function Results() {
  // need to link to predicted EPS later...
  const searchHistory = useStoreState((state) => state.searchHistory);
  let prediction = 3;
  let actual = 2;
  // const searchHistory = useStoreState((state) => state.searchHistory);

  var epsData = {
    predict: { lower: 0, upper: 0, consensusEPS: 0, p: 0, r2: 0, fit: 0 },
  };
  if (searchHistory.length > 0) {
    epsData = searchHistory[searchHistory.length - 1];
  }
  return (
    <div>
      <Card
        sx={{
          mt: 5,
          mb: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography sx={{ py: 3 }} variant="h5">
            r<sup>2</sup>: {Number(epsData.predict.r2).toFixed(2)}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            p-value:{Number(epsData.predict.p).toFixed(2)}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            {beatOrMiss(
              epsData.predict.lower,
              epsData.predict.upper,
              epsData.predict.consensusEPS
            )}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            Wall Street EPS estimate: {Number(epsData.predict.consensusEPS).toFixed(2)}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            Expected EPS Range: {Number(epsData.predict.lower).toFixed(2)} - {Number(epsData.predict.upper).toFixed(2)}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            Expected EPS Value: {Number(epsData.predict.fit).toFixed(2)}
          </Typography>
          <Typography sx={{ py: 3 }} variant="h5">
            Estimate EPS vs WallStreet (Absolute): {(Number(epsData.predict.fit) -  Number(epsData.predict.consensusEPS)).toFixed(2)}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
