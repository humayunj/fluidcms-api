import FluidCMS from "./lib";

let f = FluidCMS("uBC_EOYuByuuzlsiAuJx4");

(async () => {
  let r = await f.getAllRecords("image");
  console.dir(r, { depth: null });
})();
