import Cliente from "./ClienteModel.js";

(async () => {
  await Cliente.sync({ force:true });
})();