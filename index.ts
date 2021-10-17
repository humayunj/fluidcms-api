import { FluidCMS } from "./lib";

let f = new FluidCMS("616215249838a720d007bb4a");

// f.getModels()
//   .then((models) => {
//     console.log(JSON.stringify(models, null, 2));
//   })
//   .catch((er: Error) => console.log(er));

(async () => {
  try {
    let modelId = await f.createModel({
      title: "My Model",
      identifier: "my_model",
    });
    console.log(modelId);
  } catch (er) {
    console.log(er);
  }
})();
