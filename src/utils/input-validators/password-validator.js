import {messages, userPasswordRegExp} from "../config";

function validatePassword(inputValue) {
  return userPasswordRegExp.test(inputValue);
}

export const passwordValidator = {
  validate: validatePassword,
  message: messages.passwordInputError
}
