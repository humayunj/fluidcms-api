import { API, APIResponseError } from "./API";
import { IModelField } from "./field";

export interface IModel {
  uid: string;
  title: string;
  identifier: string;
  fields: IModelField[] | null;
}

export async function getModel(token: string, uid: string): Promise<IModel> {
  try {
    let data = await API.get(`/model/${uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
        validation: {
          isRequired: f.validation.isRquired || false,
          regex: f.validation.regex || "",
        },
      })),
    };

    return respModel;
  } catch (er) {
    throw er;
  }
}

export async function getModels(token: string, projectId: string) {
  try {
    let data = await API.get(`/model/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
          validation: {
            isRequired: f.validation.isRquired || false,
            regex: f.validation.regex || "",
          },
        })),
      });
    }
    return respModels;
  } catch (er) {
    throw er;
  }
}

export async function updateModel(
  token: string,
  modelUID: string,
  fieldsData: Partial<Omit<IModel, "uid" | "fields">>
): Promise<boolean> {
  try {
    let data = await API.patch(
      "/model/" + modelUID,
      {
        name: fieldsData.title,
        alias: fieldsData.identifier,
      } as any,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (er) {
    throw er;
  }
}

export async function createModel(
  token: string,
  fieldsData: Omit<IModel, "uid" | "fields">
): Promise<string> {
  try {
    let data = await API.post(
      "/model",
      {
        name: fieldsData.title,
        alias: fieldsData.identifier,
      } as any,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!data.model_id) throw new APIResponseError("Something went wrong");
    return data.model_id;
  } catch (er) {
    throw er;
  }
}

export async function deleteModel(
  token: string,
  modelUID: string
): Promise<boolean> {
  try {
    let data = await API.delete("/model/" + modelUID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (er) {
    throw er;
  }
}
