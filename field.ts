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

export async function getField(uid: string): Promise<IModelField> {
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
export async function deleteField(uid: string): Promise<boolean> {
  try {
    let data = await API.delete(`/field/${uid}`);

    return true;
  } catch (er) {
    throw er;
  }
}

export async function createField(
  modelID: string,
  fieldsData: Omit<IModelField, "uid">
): Promise<IModelField> {
  try {
    let data = await API.post(`/field`, {
      model_id: modelID,
      alias: fieldsData.identifier,
      name: fieldsData.title,
      field_type: fieldsData.type,
      regex_exp: [],
    } as any);

    return {
      uid: data.field_id,
      identifier: fieldsData.identifier,
      title: fieldsData.title,
      type: fieldsData.type,
    };
  } catch (er) {
    throw er;
  }
}
export async function updateField(
  fieldID: string,
  fieldsData: Partial<Omit<IModelField, "uid">>
): Promise<boolean> {
  try {
    let data = await API.patch(`/field${fieldID}`, {
      alias: fieldsData.identifier,
      name: fieldsData.title,
      field_type: fieldsData.type,
      regex_exp: [],
    } as any);

    return true;
  } catch (er) {
    throw er;
  }
}
