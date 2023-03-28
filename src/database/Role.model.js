const { Schema, model } = require("mongoose");

const Role = new Schema(
  {
    name: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Role", Role);
