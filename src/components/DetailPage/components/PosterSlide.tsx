import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfig from "../../../config/tmdbConfigs";
import { Poster } from "../../../models/ImagesMedia";
import CustomAutoSwiper from "../../common/CustomAutoSwiper";

interface Props {
  posters: Poster[];
}

const PosterSlide = (props: Props) => {
  const { posters } = props;
  return (
    <CustomAutoSwiper>
      {posters.splice(0, 10).map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <Box
              sx={{
                paddingTop: "160%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${tmdbConfig.posterPath(
                  item.file_path
                )})`,
              }}
            />
          </SwiperSlide>
        );
      })}
    </CustomAutoSwiper>
  );
};

export default PosterSlide;
