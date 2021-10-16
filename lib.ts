import { API } from "./API";
import {
  IModel,
  IModelField,
  getModel,
  getModels,
  updateModel,
  deleteModel,
} from "./model";

export class FluidCMS {
  token: string;
  constructor(token: string) {
    this.token = token;
  }

  getModel(uid: string): ReturnType<typeof getModel> {
    return getModel(uid);
  }

  getModels(): ReturnType<typeof getModels> {
    return getModels(this.token);
  }
  updateModel: typeof updateModel = (modelUID, fieldsData) => {
    return updateModel(modelUID, fieldsData);
  };

  deleteModel: typeof deleteModel = (modelUID) => {
    return deleteModel(modelUID);
  };

  async getField(uid: string): Promise<IModelField> {
    try {
      let data = await API.get(`/field/${uid}`);

      const m = data;
      let respField: IModelField = {
        uid: m._id,
        title: m.name,
        identifier: m.alias,
        type: m.field_type,
      };
      return respField;
    } catch (er) {
      throw er;
    }
  }
}
