const mongoose = require("mongoose");

const userRoleSchema = mongoose.Schema({
  value: { type: String, unqiue: true, require: true, default: "customer" },
});

const UserRole = mongoose.model("Role", userRoleSchema);

module.exports = UserRole;
