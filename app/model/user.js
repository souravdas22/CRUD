const mongoose = require("mongoose");
const { Schema } = mongoose;

const geoSchema = new Schema({
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

const addressSchema = new Schema({
  street: { type: String, required: true },
  suite: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  geo: { type: geoSchema, required: true },
});

const loginSchema = new Schema({
  uuid: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  md5: { type: String, required: true },
  sha1: { type: String, required: true },
  registered: { type: Date, required: true },
});

const companySchema = new Schema({
  name: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  bs: { type: String, required: true },
});

const userSchema = new Schema({
  id: { type: Number, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  login: { type: loginSchema, required: true },
  address: { type: addressSchema, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: companySchema, required: true},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
