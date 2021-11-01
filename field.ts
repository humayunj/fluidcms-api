import { API } from "./API";
import { IModel } from "./model";

export enum ModelFieldType {
  Unkown = -1,
  Text = 0,
}

export interface IModelField {
  uid: string;
  title: string;
  identifier: string;
  type: ModelFieldType;
  validation: {
    isRequired: boolean;
    regex: string;
  };
}

export async function getField(
  token: string,
  identifier: string,
  modelIdentifier: string
): Promise<IModelField> {
  try {
    let data = await API.get(`/field/${identifier}/${modelIdentifier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const m = data;
    let respField: IModelField = {
      uid: m._id,
      title: m.name,
      identifier: m.alias,
      type: m.field_type,
      validation: {
        isRequired: m.regex || false,
        regex: m.regex || "",
      },
    };
    return respField;
  } catch (er) {
    throw er;
  }
}
export async function deleteField(
  token: string,
  identifier: string,
  modelIdentifier: string
): Promise<boolean> {
  try {
    let data = await API.delete(`/field/${identifier}/${modelIdentifier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (er) {
    throw er;
  }
}

export async function createField(
  token: string,
  modelIdentifier: string,
  fieldsData: Omit<IModelField, "uid">
): Promise<IModelField> {
  try {
    let data = await API.post(
      `/field/${modelIdentifier}`,
      {
        alias: fieldsData.identifier,
        name: fieldsData.title,
        field_type: fieldsData.type,
        validation: {
          isRquired: fieldsData.validation.isRequired,
          regex: fieldsData.validation.regex,
        },
      } as any,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      uid: data.field_id,
      identifier: fieldsData.identifier,
      title: fieldsData.title,
      type: fieldsData.type,
      validation: fieldsData.validation,
    };
  } catch (er) {
    throw er;
  }
}
export async function updateField(
  token: string,
  fieldIdentifier: string,
  modelIdentifier: IModel["identifier"],
  fieldsData: Partial<Omit<IModelField, "uid">>
): Promise<boolean> {
  try {
    let data = await API.patch(
      `/field/${fieldIdentifier}/${modelIdentifier}`,
      {
        alias: fieldsData.identifier,
        name: fieldsData.title,
        field_type: fieldsData.type,
        validation: fieldsData.validation,
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
