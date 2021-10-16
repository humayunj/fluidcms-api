import { API } from "./API";

export enum ModelFieldType {
  Unkown = -1,
  Text = 0,
}

export interface IModelField {
  uid: string;
  title: string;
  identifier: string;
  type: ModelFieldType;
}

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

export async function deleteModel(modelUID: string): Promise<boolean> {
  try {
    let data = await API.delete("/model/" + modelUID);
    return true;
  } catch (er) {
    throw er;
  }
}
