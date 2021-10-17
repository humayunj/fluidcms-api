import { API, APIResponseError } from "./API";
import { IModelField } from "./field";



export interface IModel {
  uid: string;
  title: string;
  identifier: string;
  fields: IModelField[] | null;
}

export async function getModel(uid: string): Promise<IModel> {
  try {
    let data = await API.get(`/model/${uid}`);
    const m = data.model;

    let respModel: IModel = {
      uid: uid,
      title: m.name,
      identifier: m.alias,
      fields: m.fields.map((f: any) => ({
        uid: f._id,
        name: f.name,
        identifier: f.alias,
        type: f.field_type,
      })),
    };

    return respModel;
  } catch (er) {
    throw er;
  }
}

export async function getModels(projectId: string) {
  try {
    let data = await API.get(`/model/all/${projectId}`);

    const models = data.models;

    let respModels: IModel[] = [];
    for (let m of models) {
      respModels.push({
        uid: m._id,
        title: m.name,
        identifier: m.alias,
        fields: m.fields.map((f: any) => ({
          uid: f._id,
          title: f.name,
          identifier: f.alias,
          type: f.field_type,
        })),
      });
    }
    return respModels;
  } catch (er) {
    throw er;
  }
}

export async function updateModel(
  modelUID: string,
  fieldsData: Partial<Omit<IModel, "uid" | "fields">>
): Promise<boolean> {
  try {
    let data = await API.patch("/model/" + modelUID, {
      name: fieldsData.title,
      alias: fieldsData.identifier,
    } as any);
    return true;
  } catch (er) {
    throw er;
  }
}

export async function createModel(
  projectID: string,
  fieldsData: Omit<IModel, "uid" | "fields">
): Promise<string> {
  try {
    let data = await API.post("/model", {
      name: fieldsData.title,
      alias: fieldsData.identifier,
      project_id: projectID,
    } as any);
    if (!data.model_id) throw new APIResponseError("Something went wrong");
    return data.model_id;
  } catch (er) {
    throw er;
  }
}

export async function deleteModel(modelUID: string): Promise<boolean> {
  try {
    let data = await API.delete("/model/" + modelUID);
    return true;
  } catch (er) {
    throw er;
  }
}
