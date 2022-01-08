import { Card, TextField, Box, Button, Typography } from "@mui/material";

import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";

function Input({ childToParent }) {
  const [ticker, setTicker] = useState("");
  const [keyword, setKeyword] = useState("");

  const tickerChange = (e) => {
    setTicker(e.target.value);
  };

  const keywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const addSearch = useStoreActions((actions) => actions.addSearch);

  return (
    <div>
      <Card
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Box sx={{ mt: 3 }}>
              <TextField
                required
                label="Ticker"
                variant="outlined"
                onChange={tickerChange}
              />
              <TextField
                required
                label="Keyword"
                variant="outlined"
                onChange={keywordChange}
              />
            </Box>
            <Button
              sx={{ my: 2 }}
              variant="contained"
              onClick={() => addSearch(ticker, keyword)}
            >
              <Typography variant="body1">Search</Typography>
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default Input;
