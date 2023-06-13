import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../../api/media.api";
import { MedialResult } from "../../../models/ModelMedia";
import CustomAutoSwiper from "../../common/CustomAutoSwiper";
import SwiperSlideItem from "../../common/SwiperSlideItem";
import { useAppDispatch } from "../../../app/hook";
import { setOpenModel } from "../../../app/features/globalLoadingSlicer";

interface Props {
  mediaType: String;
  mediaCategory: String;
}

const MediaSlide = (props: Props) => {
  const [listMedia, setListMedia] = useState<MedialResult[]>([]);
  const useDispatch = useAppDispatch();

  useEffect(() => {
    const getMedialist = async () => {
      useDispatch(setOpenModel(true));
      const { response, err } = await mediaApi.getList({
        type: props.mediaType,
        mediaCategory: props.mediaCategory,
        page: 1,
      });

      if (response) setListMedia(response.data.results);
      if (err) throw err;

      useDispatch(setOpenModel(false));
    };

    getMedialist();
  }, [props.mediaCategory, props.mediaType]);

  return (
    <CustomAutoSwiper>
      {listMedia.map((item, key) => {
        return (
          <SwiperSlide key={item.id}>
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
