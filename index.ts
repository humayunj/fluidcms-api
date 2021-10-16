import { FluidCMS } from "./lib";

let f = new FluidCMS("616215249838a720d007bb4a");

// f.getModels()
//   .then((models) => {
//     console.log(JSON.stringify(models, null, 2));
//   })
//   .catch((er: Error) => console.log(er));

(async () => {
  try {
    await f.deleteModel("616b4860efc4ebbd041fcddb");
    console.log(await f.getModel("616b4860efc4ebbd041fcddb"));
  } catch (er) {
    console.log(er);
  }
})();
