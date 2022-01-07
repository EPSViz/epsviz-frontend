import { Card, Typography } from "@mui/material";

export default function Results() {
  // need to link to predicted EPS later...
  let prediction = 3;
  let actual = 2;
  return (
    <div>
      <Card
        sx={{
          mt: 5,
          mb: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ my: 3 }} variant="h5">
          r<sup>2</sup>:
        </Typography>
        <Typography sx={{ my: 3 }} variant="h5">
          p-value:{" "}
        </Typography>
        <Typography sx={{ my: 3 }} variant="h5">
          {prediction > actual ? "Beat" : "Miss"}
        </Typography>
      </Card>
    </div>
  );
}
