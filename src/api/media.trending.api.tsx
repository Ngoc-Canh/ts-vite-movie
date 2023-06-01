import { AxiosResponse } from "axios";
import React from "react";
import { MedialResult, MedialRoot } from "../models/ModelMedia";
import PublicClient from "./client/public.client";

interface PropsGetTrending {
  media_type: String;
  time_window: String;
}

const mediaEndpoint = {
  getList: (props: PropsGetTrending) =>
    `/trending/${props.media_type}/${props.time_window}`,
};

const MediaTrendingApi = {
  getTrending: async (props: PropsGetTrending) => {
    try {
      const response = await PublicClient.get<MedialRoot>(
        mediaEndpoint.getList(props)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default MediaTrendingApi;
