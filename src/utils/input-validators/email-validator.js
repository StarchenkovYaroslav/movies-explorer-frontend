import validator from "validator/es";
import {messages} from "../config";

function validateEmail(inputValue) {
  return validator.isEmail(inputValue);
}

export const emailValidator = {
  validate: validateEmail,
  message: messages.emailInputError
}
