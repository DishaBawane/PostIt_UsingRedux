import axios from "axios";

export default axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "L7n77lo1Cd6iYalJUQpaNO39zhn61Nrk7MYnXEbp",
    "X-Parse-REST-API-Key":"Q68ggk2wk60CKGbrq4QxUSp9Bg2NI2nm2IVGvQzJ",
    "Content-Type": "application/json",
  },
});