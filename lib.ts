import { API } from "./API";
import { createField, deleteField, getField, updateField } from "./field";
import {
  getModel,
  getModels,
  updateModel,
  deleteModel,
  createModel as _createModel,
} from "./model";
import {
  createRecord,
  deleteMultipleRecords,
  deleteRecord,
  getMedia,
  getRecord,
  getRecords,
  updateRecord,
  uploadRecordImage,
} from "./record";

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
    return getModel(this.token, uid);
  }

  updateModel = (
    modelUID: string,
    fieldsData: Parameters<typeof updateModel>[2]
  ) => {
    return updateModel(this.token, modelUID, fieldsData);
  };

  createModel(
    fieldsData: Parameters<typeof _createModel>[1]
  ): ReturnType<typeof _createModel> {
    return _createModel(this.token, fieldsData);
  }

  deleteModel = (modelUID: string) => {
    return deleteModel(this.token, modelUID);
  };

  getModels(): ReturnType<typeof getModels> {
    return getModels(this.token, this.token);
  }

  createField(
    modelID: Parameters<typeof createField>[1],
    fieldsData: Parameters<typeof createField>[2]
  ): ReturnType<typeof createField> {
    return createField(this.token, modelID, fieldsData);
  }
  updateField(
    fieldID: Parameters<typeof updateField>[1],
    fieldsData: Parameters<typeof updateField>[2]
  ): ReturnType<typeof updateField> {
    return updateField(this.token, fieldID, fieldsData);
  }

  getField(
    fieldID: Parameters<typeof getField>[1]
  ): ReturnType<typeof getField> {
    return getField(this.token, fieldID);
  }

  deleteField(
    fieldID: Parameters<typeof deleteField>[1]
  ): ReturnType<typeof deleteField> {
    return deleteField(this.token, fieldID);
  }

  createRecord(
    modelUID: string,
    fieldsData: Parameters<typeof createRecord>[2]
  ): ReturnType<typeof createRecord> {
    return createRecord(this.token, modelUID, fieldsData);
  }
  updateRecord(
    recordIUD: string,
    fieldsData: Parameters<typeof updateRecord>[2]
  ): ReturnType<typeof updateRecord> {
    return updateRecord(this.token, recordIUD, fieldsData);
  }

  deleteRecord(recordUID: string): ReturnType<typeof deleteRecord> {
    return deleteRecord(this.token, recordUID);
  }
  deleteMultipleRecords(
    recordUID: string[]
  ): ReturnType<typeof deleteMultipleRecords> {
    return deleteMultipleRecords(this.token, recordUID);
  }

  uploadRecordImage(image: File): ReturnType<typeof uploadRecordImage> {
    return uploadRecordImage(this.token, image);
  }
  getMedia(mediaID: string): ReturnType<typeof getMedia> {
    return getMedia(this.token, mediaID);
  }

  getRecord(recordUID: string): ReturnType<typeof getRecord> {
    return getRecord(this.token, recordUID);
  }
  getAllRecords(modelUID: string): ReturnType<typeof getRecords> {
    return getRecords(this.token, modelUID);
  }
}
