import { API, APIResponseError } from "./API";
import { IModelField } from "./field";
import { IModel } from "./model";

export interface IRecord {
  uid: string;
  modelId: IModelField["uid"];
  fields: { fieldId: IModelField["uid"]; value: any }[];
}

export async function getRecord(
  token: string,
  uid: IRecord["uid"]
): Promise<IRecord> {
  try {
    let data = await API.get(`/record/${uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let respRecord: IRecord = {
      uid: uid,
      modelId: data.model_id,
      fields: data.fields.map((f: any) => ({
        fieldId: f.field_id,
        value: f.value,
      })),
    };

    return respRecord;
  } catch (er) {
    throw er;
  }
}

export async function getRecords(token: string, modelUID: IModel["uid"]) {
  try {
    let data = await API.get(`/record/all/${modelUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const records = data;

    let respRecords: IRecord[] = [];
    for (let m of records) {
      respRecords.push({
        uid: m._id,
        modelId: modelUID,
        fields: m.fields.map((f: any) => ({
          fieldId: f.field_id,
          value: f.value,
        })),
      });
    }
    return respRecords;
  } catch (er) {
    throw er;
  }
}

export async function updateRecord(
  token: string,
  recordUID: string,
  fieldsData: IRecord["fields"]
): Promise<boolean> {
  try {
    let data = await API.patch(
      "/record/" + recordUID,
      {
        fields: fieldsData.map((f, i) => ({
          field_id: f.fieldId,
          value: f.value,
        })),
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

export async function createRecord(
  token: string,
  modelId: string,
  fieldsData: IRecord["fields"]
): Promise<string> {
  try {
    let data = await API.post(
      "/record",
      {
        model_id: modelId,
        fields: fieldsData.map((f, i) => ({
          field_id: f.fieldId,
          value: f.value,
        })),
      } as any,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data._id;
  } catch (er) {
    throw er;
  }
}

export async function deleteRecord(
  token: string,
  recordUID: string
): Promise<boolean> {
  try {
    let data = await API.delete("/record/" + recordUID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (er) {
    throw er;
  }
}
export async function deleteMultipleRecords(
  token: string,
  recordUIDs: string[]
): Promise<boolean> {
  try {
    let data = await API.delete("/record", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        ids: recordUIDs,
      },
    });
    return true;
  } catch (er) {
    throw er;
  }
}
