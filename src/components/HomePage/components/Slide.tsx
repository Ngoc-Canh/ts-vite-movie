import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaTrendingApi from "../../../api/media.trending.api";
import MediaGenresApi from "../../../api/media.genres.api";
import tmdbConfig from "../../../config/tmdbConfigs";
import { Genre } from "../../../models/ModelGenres";
import { MedialResult } from "../../../models/ModelMedia";
import ConfigUI from "../../../utils/config-ui";
import ButtonCustom from "../../common/Button";
import CircularRating from "../../common/CircularRating";
import _ from "lodash";

interface Props {
  mediaType: String;
  timeWindow: String;
}

const Slide = (props: Props) => {
  const [movie, setMovies] = useState<MedialResult[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getMedia = async () => {
      const { response, error } = await MediaTrendingApi.getTrending({
        media_type: props.mediaType,
        time_window: props.timeWindow,
      });

      if (response) setMovies(response.data.results);
      if (error) throw error;
    };

    const getGenres = async () => {
      const { response, err } = await MediaGenresApi.getList({
        type: props.mediaType,
      });

      if (response) {
        setGenres(response.data.genres);
        getMedia();
      }
      if (err) throw err;
    };

    getGenres();
  }, [props.mediaType, props.timeWindow]);

  return (
    <Swiper style={{ width: "100%", height: "max-content" }} loop={true}>
      {movie.map((media, key) => {
        return (
          <SwiperSlide>
            <Box
              sx={{
                paddingTop: {
                  xs: "130%",
                  sm: "80%",
                  md: "60%",
                  lg: "45%",
                },
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundImage: `url(${tmdbConfig.backdropPath(
                  media.backdrop_path
                )})`,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "40%",
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,7), transparent)",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                }}
              />
            </Box>

            <Box
              ml={20}
              sx={{
                position: "absolute",
                width: "40%",
                top: "30%",
                left: 0,
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {media.title || ""}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CircularRating rate={media.vote_average} />
                  {_.take(media.genre_ids, 2).map((genreId, key) => {
                    let finder = genres.find((e) => e.id === genreId);
                    if (finder) {
                      return <ButtonCustom key={key} text={finder.name} />;
                    }
                  })}
                </Stack>
              </Stack>

              <Typography
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                variant="body2"
                color={"white"}
                pt={3}
                mb={3}
              >
                {media.overview}
              </Typography>

              <Link to={`/${media.id}/${props.mediaType}`} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="error"
                  style={{
                    backgroundColor: "red",
                    height: "30px",
                    fontFamily: "system-ui",
                  }}
                  startIcon={<PlayArrowIcon />}
                  sx={{ ...ConfigUI.style.styleButton }}
                >
                  Watch Now
                </Button>
              </Link>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(Slide);
