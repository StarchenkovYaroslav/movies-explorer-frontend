import validator from "validator/es";

export default function validateEmail(inputValue) {
  return validator.isEmail(inputValue);
}
