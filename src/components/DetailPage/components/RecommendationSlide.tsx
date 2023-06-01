import { SwiperSlide } from "swiper/react";
import { ListResult } from "../../../models/Recommendation";
import CustomAutoSwiper from "../../common/CustomAutoSwiper";
import SwiperSlideItem from "../../common/SwiperSlideItem";

interface Props {
  media: ListResult[];
  type: string;
}

function RecommendationSlide(props: Props) {
  const { media } = props;

  return (
    <CustomAutoSwiper>
      {media.map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <SwiperSlideItem
              medialResult={{
                title: item.title,
                overview: item.overview,
                release_date: item.release_date,
                vote_average: item.vote_average,
                vote_count: item.vote_count,
                poster_path: item.poster_path,
              }}
              type={{ media_type: props.type }}
            />
          </SwiperSlide>
        );
      })}
    </CustomAutoSwiper>
  );
}

export default RecommendationSlide;
