import {messages, userNameRegExp} from "../config";

function validateName(inputValue) {
  return userNameRegExp.test(inputValue);
}

export const nameValidator = {
  validate: validateName,
  message: messages.nameInputError
}
