import { API } from "./API";
import { createField, deleteField, getField, updateField } from "./field";
import {
  getModel,
  getModels,
  updateModel,
  deleteModel,
  createModel as _createModel,
} from "./model";

export class FluidCMS {
  token: string;
  constructor(token: string) {
    this.token = token;
  }

  /**
   * Get a model by ID
   * @param uid Model Unique ID
   * @returns Promise whic resolve to IModel or rejected with APIResponseError
   */
  getModel(uid: string): ReturnType<typeof getModel> {
    return getModel(uid);
  }

  updateModel: typeof updateModel = (modelUID, fieldsData) => {
    return updateModel(modelUID, fieldsData);
  };

  createModel(
    fieldsData: Parameters<typeof _createModel>[1]
  ): ReturnType<typeof _createModel> {
    return _createModel(this.token, fieldsData);
  }

  deleteModel: typeof deleteModel = (modelUID) => {
    return deleteModel(modelUID);
  };

  getModels(): ReturnType<typeof getModels> {
    return getModels(this.token);
  }

  createField(
    modelID: Parameters<typeof createField>[0],
    fieldsData: Parameters<typeof createField>[1]
  ): ReturnType<typeof createField> {
    return createField(modelID, fieldsData);
  }
  updateField(
    fieldID: Parameters<typeof updateField>[0],
    fieldsData: Parameters<typeof updateField>[1]
  ): ReturnType<typeof updateField> {
    return updateField(fieldID, fieldsData);
  }

  getField(
    fieldID: Parameters<typeof getField>[0]
  ): ReturnType<typeof getField> {
    return getField(fieldID);
  }

  deleteField(
    fieldID: Parameters<typeof deleteField>[0]
  ): ReturnType<typeof deleteField> {
    return deleteField(fieldID);
  }
}
