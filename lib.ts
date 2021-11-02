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
  getModel(modelIdentifier: string): ReturnType<typeof getModel> {
    return getModel(this.token, modelIdentifier);
  }

  updateModel = (
    modelIdentifier: string,
    fieldsData: Parameters<typeof updateModel>[2]
  ) => {
    return updateModel(this.token, modelIdentifier, fieldsData);
  };

  createModel(
    fieldsData: Parameters<typeof _createModel>[1]
  ): ReturnType<typeof _createModel> {
    return _createModel(this.token, fieldsData);
  }

  deleteModel = (modelIdentifier: string) => {
    return deleteModel(this.token, modelIdentifier);
  };

  getModels(): ReturnType<typeof getModels> {
    return getModels(this.token, this.token);
  }

  createField(
    modelIdentifier: Parameters<typeof createField>[1],
    fieldsData: Parameters<typeof createField>[2]
  ): ReturnType<typeof createField> {
    return createField(this.token, modelIdentifier, fieldsData);
  }
  updateField(
    fieldIdentifier: Parameters<typeof updateField>[1],
    modelIdentifier: Parameters<typeof updateField>[2],
    fieldsData: Parameters<typeof updateField>[3]
  ): ReturnType<typeof updateField> {
    return updateField(
      this.token,
      fieldIdentifier,
      modelIdentifier,
      fieldsData
    );
  }

  getField(
    fieldIdentifier: Parameters<typeof getField>[1],
    modelIdentifier: Parameters<typeof getField>[2]
  ): ReturnType<typeof getField> {
    return getField(this.token, fieldIdentifier, modelIdentifier);
  }

  deleteField(
    fieldIdentifier: Parameters<typeof getField>[1],
    modelIdentifier: Parameters<typeof getField>[2]
  ): ReturnType<typeof deleteField> {
    return deleteField(this.token, fieldIdentifier, modelIdentifier);
  }

  createRecord(
    modelIdentifier: string,
    fieldsData: Parameters<typeof createRecord>[2]
  ): ReturnType<typeof createRecord> {
    return createRecord(this.token, modelIdentifier, fieldsData);
  }
  updateRecord(
    recordUID: string,
    fieldsData: Parameters<typeof updateRecord>[2]
  ): ReturnType<typeof updateRecord> {
    return updateRecord(this.token, recordUID, fieldsData);
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
  getAllRecords(modelIdentifier: string): ReturnType<typeof getRecords> {
    return getRecords(this.token, modelIdentifier);
  }
}
