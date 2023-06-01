import { MedialRoot } from "../models/ModelMedia";
import { MediaDetail } from "../models/ModelMediaDetail";
import PublicClient from "./client/public.client";

interface PropsGetList {
  mediaCategory: String;
  type: String;
  page: number;
}

interface PropsGetDetail {
  type?: String;
  id?: String;
}

interface PropsSearch {
  type: String;
  page: number;
  query: String;
}

const mediaEndPoints = {
  list: (props: PropsGetList) =>
    `${props.type}/${props.mediaCategory}?page=${props.page}`,
  detail: (props: PropsGetDetail) => `${props.type}/${props.id}`,
  search: (props: PropsSearch) =>
    `search/${props.type}?query=${props.query}&page=${props.page}`,
};

const mediaApi = {
  getList: async (props: PropsGetList) => {
    try {
      const response = await PublicClient.get<MedialRoot>(
        mediaEndPoints.list(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getDetail: async (props: PropsGetDetail) => {
    try {
      const response = await PublicClient.get<MediaDetail>(
        mediaEndPoints.detail(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  search: async (props: PropsSearch) => {
    try {
      const response = await PublicClient.get(mediaEndPoints.search(props));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default mediaApi;
