import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ConfigUI from "../../utils/config-ui";
import ButtonCustom from "../common/Button";
import CircularRating from "../common/CircularRating";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Cast } from "../../models/Credits";
import Container from "../common/Container";
import CastSlide from "./components/CastSlide";
import { useEffect, useState, useRef } from "react";
import mediaApi from "../../api/media.api";
import { MediaDetail } from "../../models/ModelMediaDetail";
import tmdbConfig from "../../config/tmdbConfigs";
import MediaCreditsApi from "../../api/media.credits.api";
import MediaVideosApi from "../../api/media.videos.api";
import { Result } from "../../models/ModelVideo";
import PosterSlide from "./components/PosterSlide";
import { Backdrop, Poster } from "../../models/ImagesMedia";
import BackdropSlide from "./components/BackdropSlide";
import { ListResult } from "../../models/Recommendation";
import RecommendationSlide from "./components/RecommendationSlide";
import VideoSlide from "./components/VideoSlide";
import HeaderPage from "./components/HeaderPage";

const DetailPage = () => {
  const { id, type } = useParams();
  const [detail, setDetail] = useState<MediaDetail>();
  const [casters, setCasters] = useState<Cast[]>([]);
  const [posters, setPoster] = useState<Poster[]>([]);
  const [recommendation, setRecommendation] = useState<ListResult[]>([]);
  const [backDrops, setBackDrops] = useState<Backdrop[]>([]);
  const [infoVideo, setInfoVideo] = useState<Result[]>([]);

  useEffect(() => {
    const getDetail = async () => {
      const { response, err } = await mediaApi.getDetail({
        id: id,
        type: type,
      });

      if (response) setDetail(response.data);
      if (err) throw err;
    };

    const getCredits = async () => {
      const { response, err } = await MediaCreditsApi.getList({
        id: id,
        type: type,
      });

      if (response) setCasters(response.data.cast);
      if (err) throw err;
    };

    const getVideos = async () => {
      const { response, error } = await MediaVideosApi.getVideos({
        movie_id: id,
        media_type: type,
      });

      if (response) setInfoVideo(response.data.results);
      if (error) throw error;
    };

    const getImages = async () => {
      const { response, error } = await MediaVideosApi.getImages({
        movie_id: id,
        media_type: type,
      });

      if (response) {
        setPoster(response?.data.posters);
        setBackDrops(response?.data.backdrops);
      }
      if (error) throw error;
    };

    const getRecommendations = async () => {
      const { response, error } = await MediaVideosApi.getRecommendationMedial({
        movie_id: id,
        media_type: type,
      });

      if (response) {
        setRecommendation(response?.data.results);
      }
      if (error) throw error;
    };

    getCredits();
    getDetail();
    getVideos();
    getImages();
    getRecommendations();
  }, [id, type]);

  return (
    <Box
      sx={{
        margin: "auto",
      }}
    >
      <HeaderPage path={detail?.backdrop_path ?? ""} />
      <Box sx={{ marginTop: { xs: "-10rem", md: "-15rem", lg: "-20rem" } }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: { xs: "70%", sm: "50%", md: "40%" },
              margin: { xs: "0 auto 2rem", md: "0 1.5rem 0 1.5rem" },
            }}
          >
            <Box
              sx={{
                paddingTop: { lg: "140%" },
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: `url(${tmdbConfig.backdropPath(
                  detail && detail.poster_path
                )})`,
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "30%", sm: "50%", md: "60%" },
              height: "100%",
              marginRight: "1.5rem",
            }}
          >
            <Stack spacing={5}>
              <Typography
                variant="h4"
                color="white"
                fontWeight={700}
                fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
              >
                {detail && detail.original_title}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <CircularRating rate={6.5} size={50} />
                {detail &&
                  detail.genres.slice(0, 2).map((item, key) => {
                    return (
                      <ButtonCustom
                        key={key}
                        text={item.name}
                        height={"30px"}
                      />
                    );
                  })}
              </Stack>
              <Typography
                color="white"
                variant="body1"
                sx={{ ...ConfigUI.style.textLine(5) }}
              >
                {detail && detail.overview}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton color="error" style={{ marginRight: "15px" }}>
                  <FavoriteOutlinedIcon fontSize="medium" />
                </IconButton>
                <Button
                  variant="contained"
                  color="error"
                  style={{ backgroundColor: "red", fontFamily: "system-ui" }}
                  startIcon={<PlayArrowIcon />}
                  sx={{ ...ConfigUI.style.styleButton }}
                >
                  Watch Now
                </Button>
              </Box>
              <Container header={"Cast"}>
                <CastSlide cast={casters} />
              </Container>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Container
        header={"VIDEOS"}
        sx={{ marginTop: "50px", paddingX: "1.5rem" }}
      >
        <VideoSlide video={infoVideo} />
      </Container>
      <Container
        header={"BACKDROPS"}
        sx={{ marginTop: "50px", paddingX: "1.5rem" }}
      >
        <BackdropSlide backDrops={backDrops} />
      </Container>
      <Container
        header={"POSTER"}
        sx={{ marginTop: "50px", paddingX: "1.5rem" }}
      >
        <PosterSlide posters={posters} />
      </Container>
      <Container
        header={"YOU MAY ALSO LIKE"}
        sx={{ marginTop: "50px", paddingX: "1.5rem" }}
      >
        <RecommendationSlide media={recommendation} type={type ?? ""} />
      </Container>
      <Grid height={"350px"} />
    </Box>
  );
};

export default DetailPage;
