import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfig from "../../../config/tmdbConfigs";
import { Result } from "../../../models/ModelVideo";

interface Props {
  video: Result[];
}

interface PropsItem {
  data: Result;
}

const VideoSlideItem = (props: PropsItem) => {
  const { data } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const height = (iframeRef.current.offsetWidth * 6) / 10 + "px";
      iframeRef.current.setAttribute("height", height);
    }
  }, [data]);

  return (
    <iframe
      className="video"
      width="100%"
      ref={iframeRef}
      src={tmdbConfig.youtubePath(data.key)}
      allowFullScreen
    />
  );
};

function VideoSlide(props: Props) {
  const { video } = props;

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
        "& .swiper-pagination-bullet": {
          backgroundColor: "#FFF",
        },
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
        {video.slice(0, 5).map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <VideoSlideItem data={item} key={key} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default VideoSlide;
