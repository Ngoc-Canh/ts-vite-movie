import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfig from "../../../config/tmdbConfigs";
import { Backdrop } from "../../../models/ImagesMedia";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  backDrops: Backdrop[];
}

function BackdropSlide(props: Props) {
  const { backDrops } = props;
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: "100%",
          opacity: "0.6",
          paddingBottom: "3rem",
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "white",
          "&::after": {
            fontSize: { xs: "1rem", md: "2rem" },
          },
        },
        "& .swiper-slide-active": { opacity: 1 },
        "& .swiper": {
          paddingX: { xs: "1rem", md: "4rem" },
        },
        "& .swiper-pagination-bullet" : {
          backgroundColor: "#FFF"
        }
      }}
    >
      <Swiper
        style={{ width: "100%", height: "max-content" }}
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {backDrops.slice(0, 10).map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Box
                sx={{
                  paddingTop: "60%",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${tmdbConfig.backdropPath(
                    item.file_path
                  )})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default BackdropSlide;
