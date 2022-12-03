const { Router } = require("express");
// const Cliente = require("../models/cliente");
// const Etapa = require("../models/etapas");
// const Proyecto = require("../models/proyecto");
// const TipoProyecto = require("../models/tipoProyecto");
// const Universidad = require("../models/universidad");
const {
  // createCliente,
  getClientes,
  getClienteByID,
  // updateClienteByID,
  // deleteClienteByID,
} = require("../controllers/cliente");

const router = Router();

// router.post("/", createCliente);

router.get("/", getClientes);

router.get("/:id", getClienteByID);

// router.put("/:id", updateClienteByID);

// router.delete("/:id", deleteClienteByID);

module.exports = router;
