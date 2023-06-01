import { CreditsModel } from "../models/Credits";
import PublicClient from "./client/public.client";

interface PropsGetList {
  type?: String;
  id?: String;
}

const mediaEndPoints = {
  list: (props: PropsGetList) => `${props.type}/${props.id}/credits`,
};

const MediaCreditsApi = {
  getList: async (props: PropsGetList) => {
    try {
      const response = await PublicClient.get<CreditsModel>(
        mediaEndPoints.list(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default MediaCreditsApi;
