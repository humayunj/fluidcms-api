import { API, APIResponseError } from "./API";
import { IModelField } from "./field";

export interface IModel {
  title: string;
  identifier: string;
  fields: IModelField[] | null;
}

export async function getModel(
  token: string,
  identifier: string
): Promise<IModel> {
  try {
    let data = await API.get(`/model/${identifier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const m = data.model;

    let respModel: IModel = {
      title: m.name,
      identifier: m.alias,
      fields: m.fields.map((f: any) => ({
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
        title: m.name,
        identifier: m.alias,
        fields: m.fields.map((f: any) => ({
          fieldId: f._id,
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
  identifier: string,
  fieldsData: Partial<Omit<IModel, "fields">>
): Promise<boolean> {
  try {
    let data = await API.patch(
      "/model/" + identifier,
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
  identifier: string
): Promise<boolean> {
  try {
    let data = await API.delete("/model/" + identifier, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (er) {
    throw er;
  }
}
