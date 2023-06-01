import { ResponseGenre } from "../models/ModelGenres";
import PublicClient from "./client/public.client";

interface PropsGetList {
  type: String;
}

const mediaEndPoints = {
  list: (props: PropsGetList) => `genre/${props.type}/list`,
};

const MediaGenresApi = {
  getList: async (props: PropsGetList) => {
    try {
      const response = await PublicClient.get<ResponseGenre>(
        mediaEndPoints.list(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default MediaGenresApi;
