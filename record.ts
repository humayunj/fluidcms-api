import { API } from "./API";
import { IModelField } from "./field";
import { IModel } from "./model";

export interface IRecord {
  recordId: string;
  modelIdentifier: IModelField["identifier"];
  fields: { [fieldIdentifier: string]: string };
}

export async function getRecord(
  token: string,
  recordId: IRecord["recordId"]
): Promise<IRecord> {
  try {
    let data = await API.get(`/record/${recordId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let respRecord: IRecord = {
      recordId: recordId,
      modelIdentifier: data.model_alias,
      fields: data.fields.reduce((fieldsMap: any, f: any) => {
        fieldsMap[f.field_alias] = f.value;
        return fieldsMap;
      }, {}),
    };

    return respRecord;
  } catch (er) {
    throw er;
  }
}

export async function getRecords(
  token: string,
  modelIdentifier: IModel["identifier"]
) {
  try {
    let data = await API.get(`/record/all/${modelIdentifier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let records: [{ ['fieldIdentifier']: string }] = data;

    // const records = data;
    // console.log("data - ", data);

    // let respRecords: IRecord[] = [];
    // for (let m of records) {
    //   respRecords.push({
    //     uid: m._id,
    //     modelIdentifier: modelIdentifier,
    //     fields: m.fields.map((f: any) => ({
    //       fieldIdentifier: f.field_alias,
    //       value: f.value,
    //     })),
    //   });
    // }
    return records;
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
        fields: Object.keys(fieldsData).map((fieldIdentifier) => ({
          field_alias: fieldIdentifier,
          value: fieldsData[fieldIdentifier],
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
  modelIdentifier: string,
  fieldsData: IRecord["fields"]
): Promise<string> {
  try {
    let data = await API.post(
      `/record/${modelIdentifier}`,
      {
        fields: Object.keys(fieldsData).map((fieldIdentifier) => ({
          field_alias: fieldIdentifier,
          value: fieldsData[fieldIdentifier],
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
interface ImageType {
  url: string;
  cdn_id: string;
}
export async function uploadRecordImage(token: string, image: File) {
  let fd = new FormData();
  fd.append("image", image);

  try {
    let data = await API.post("/image", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      uid: data._id as string,
      sm: data.sm as ImageType,
      md: data.md as ImageType,
      raw: data.raw as ImageType,
    };
  } catch (er) {
    throw er;
  }
}

export async function getMedia(token: string, mediaID: string) {
  try {
    let data = await API.get("/media/" + mediaID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      uid: data._id as string,
      sm: data.sm as ImageType,
      md: data.md as ImageType,
      raw: data.raw as ImageType,
    };
  } catch (er) {
    throw er;
  }
}

export async function deleteRecord(
  token: string,
  recordID: string
): Promise<boolean> {
  try {
    let data = await API.delete("/record/" + recordID, {
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
  recordIDs: string[]
): Promise<boolean> {
  try {
    let data = await API.delete("/record", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        ids: recordIDs,
      },
    });
    return true;
  } catch (er) {
    throw er;
  }
}
