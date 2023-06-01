import { ModelVideos } from "../models/ModelVideo";
import { ImagesMedia } from "../models/ImagesMedia";
import PublicClient from "./client/public.client";
import { Recommendation } from "../models/Recommendation";

interface Props {
  media_type?: String;
  movie_id?: String;
}

const mediaEndpoint = {
  getVideos: (props: Props) => `/${props.media_type}/${props.movie_id}/videos`,
  getImages: (props: Props) => `/${props.media_type}/${props.movie_id}/images`,
  getRecommendationMedial: (props: Props) =>
    `/${props.media_type}/${props.movie_id}/recommendations`,
};

const MediaVideosApi = {
  getVideos: async (props: Props) => {
    try {
      const response = await PublicClient.get<ModelVideos>(
        mediaEndpoint.getVideos(props)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
  getImages: async (props: Props) => {
    try {
      const response = await PublicClient.get<ImagesMedia>(
        mediaEndpoint.getImages(props)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
  getRecommendationMedial: async (props: Props) => {
    try {
      const response = await PublicClient.get<Recommendation>(
        mediaEndpoint.getRecommendationMedial(props)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default MediaVideosApi;
