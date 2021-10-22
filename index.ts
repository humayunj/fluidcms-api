import { FluidCMS } from "./lib";

let f = new FluidCMS("AU_OD0CblrGopv1uuEB1j");

// f.getModels()
//   .then((models) => {
//     console.log(JSON.stringify(models, null, 2));
//   })
//   .catch((er: Error) => console.log(er));

(async () => {
  try {
    let r = await f.getAllRecords("616ee0b02ab26775ef1f877f");
    console.log(r);
  } catch (er) {
    console.log(er);
  }
})();
