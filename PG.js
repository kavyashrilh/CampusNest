const {model}=require("mongoose");

const {PGSchema}=require("../schemas/PGSchema");

const PGModel=new model("PG",PGSchema);

module.exports={PGModel};
// const { model } = require("mongoose");
// const  PGSchema  = require("../schemas/PGSchema");

// const PGModel = model("PG", PGSchema);

// module.exports =  PGModel ;

// const {model} =require("mongoose");

// const {HoldingsSchema} =require("../schemas/HoldingsSchema");

// const HoldingsModel=new model("holding",HoldingsSchema);

// module.exports={HoldingsModel}