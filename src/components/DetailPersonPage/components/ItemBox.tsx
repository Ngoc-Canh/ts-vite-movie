import PlayArrow from "@mui/icons-material/PlayArrow";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import tmdbConfig from "../../../config/tmdbConfigs";
import ConfigUI from "../../../utils/config-ui";
import CircularRating from "../../common/CircularRating";
import { Link } from "react-router-dom";

interface Props {
  medialResult: {
    title: string;
    poster_path: string;
    overview: string;
    release_date?: string;
    vote_average: number;
    vote_count: number;
    first_air_date?: string;
    name?: string;
    id?: number;
    media_type?: string;
  };
}

const ItemBox = (props: Props) => {
  const { medialResult } = props;
  return (
    <Box
      sx={{
        paddingTop: "30%",
        width: "24%",
        marginLeft: "8px",
        marginTop: "8px",
        backgroundPosition: "center center",
        position: "relative",
        backgroundSize: "cover",
        backgroundImage: `url(${tmdbConfig.backdropPath(
          medialResult.poster_path
        )})`,
        backgroundRepeat: "no-repeat",
        "&:hover .bg-media-back, &:hover .btn-media-play, &:hover .info-media":
          { visibility: "visible" },
      }}
    >
      <Box
        className="bg-media-back"
        sx={{
          visibility: "hidden",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <Link
        to={`/${props.medialResult.id}/${props.medialResult.media_type}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          className="btn-media-play"
          startIcon={<PlayArrow />}
          variant="contained"
          sx={{
            ...ConfigUI.style.styleButton,
            position: "absolute",
            visibility: "hidden",
            top: "50%",
            left: "50%",
            padding: "4px 10px",
            transform: "translate(-50%, -50%)",
            "& .MuiButton-startIcon": {
              marginRight: "-4px",
            },
          }}
        />
      </Link>

      <Box
        className="info-media"
        sx={{
          visibility: "hidden",
          position: "absolute",
          width: "100%",
          height: "max-content",
          bottom: "0",
          padding: "2rem 0.5rem",
        }}
      >
        <Stack spacing={2}>
          {medialResult.vote_average > 0 ? (
            <CircularRating rate={medialResult.vote_average} />
          ) : (
            <></>
          )}
          <Typography color={"white"}>
            {medialResult.release_date
              ? medialResult.release_date?.split("-")[0]
              : medialResult.first_air_date?.split("-")[0]}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={700}
            letterSpacing={0}
            sx={{
              ...ConfigUI.style.textLine(1),
            }}
            color={"white"}
          >
            {medialResult.title ? medialResult.title : medialResult?.name}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ItemBox;
