import { Box, LinearProgress, Typography } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }} className="text-brand__black__color">
        <LinearProgress color="inherit" variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function OrderStepper2({ value }) {
  return (
    <Box sx={{ width: "75%" }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  );
}
