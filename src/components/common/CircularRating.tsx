import { CircularProgress, Typography, Box } from "@mui/material";

interface Props {
  rate: number;
  size?: number;
}

const CircularRating = (props: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "max-content",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={parseFloat(props.rate.toFixed(1)) * 10}
        size={props.size || 40}
        color="success"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "white",
            paddingTop: "2px",
            fontWeight: "700",
          }}
        >
          {parseFloat(props.rate.toFixed(1))}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularRating;
