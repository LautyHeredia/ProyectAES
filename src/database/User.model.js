const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, require: true },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("User", User);
