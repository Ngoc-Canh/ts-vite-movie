import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../../api/media.api";
import { MedialResult } from "../../../models/ModelMedia";
import CustomAutoSwiper from "../../common/CustomAutoSwiper";
import SwiperSlideItem from "../../common/SwiperSlideItem";

interface Props {
  mediaType: String;
  mediaCategory: String;
}

const MediaSlide = (props: Props) => {
  const [listMedia, setListMedia] = useState<MedialResult[]>([]);

  useEffect(() => {
    const getMedialist = async () => {
      const { response, err } = await mediaApi.getList({
        type: props.mediaType,
        mediaCategory: props.mediaCategory,
        page: 1,
      });

      if (response) setListMedia(response.data.results);
      if (err) throw err;
    };

    getMedialist();
  }, [props.mediaCategory, props.mediaType]);

  return (
    <CustomAutoSwiper>
      {listMedia.map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <SwiperSlideItem
              medialResult={item}
              type={{ media_type: props.mediaType }}
            />
          </SwiperSlide>
        );
      })}
    </CustomAutoSwiper>
  );
};

export default MediaSlide;
