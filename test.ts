import FluidCMS from "./lib";

let f = FluidCMS("uBC_EOYuByuuzlsiAuJx4");

(async () => {
  let r = await f.createRecord("image", { imagessss: "aaa" });
  console.dir(r, { depth: null });
})();
