import { CompileCreditModel } from "../models/CompileCreditsMedia";
import { ModelPerson } from "../models/Person";
import PublicClient from "./client/public.client";

interface PropsGetInfoPerson {
  id?: String;
}

const mediaEndPoints = {
  list: (props: PropsGetInfoPerson) => `person/${props.id}`,
  compileCredits: (props: PropsGetInfoPerson) => `person/${props.id}/combined_credits`
};

const MediaPersonApi = {
  getList: async (props: PropsGetInfoPerson) => {
    try {
      const response = await PublicClient.get<ModelPerson>(
        mediaEndPoints.list(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  compileCredits: async (props: PropsGetInfoPerson) => {
    try {
      const response = await PublicClient.get<CompileCreditModel>(
        mediaEndPoints.compileCredits(props)
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default MediaPersonApi;
