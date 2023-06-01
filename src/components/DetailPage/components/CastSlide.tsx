import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cast } from "../../../models/Credits";
import ConfigUI from "../../../utils/config-ui";
import { Link } from "react-router-dom";

interface Props {
  cast: Cast[];
}

const CastSlide = (props: Props) => {
  const { cast } = props;
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: {
            xs: "50%",
            sm: "35%",
            md: "25%",
            lg: "20.5%",
          },
        },
      }}
    >
      <Swiper
        slidesPerView="auto"
        style={{ width: "100%", height: "max-content" }}
        spaceBetween={10}
      >
        {cast.map((item, key) => {
          return (
            <SwiperSlide key={key} style={{ cursor: "pointer" }}>
              <Link to={`/person/${item.id}`}>
                <Box
                  sx={{
                    paddingTop: "150%",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Box
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "10px",
                    height: "max-content",
                  }}
                >
                  <Typography
                    sx={{ ...ConfigUI.style.textLine(1) }}
                    style={{ color: "white" }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default CastSlide;
