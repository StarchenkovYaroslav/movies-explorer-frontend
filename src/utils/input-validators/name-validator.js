import {userNameRegExp} from "../config";

export default function validateName(inputValue) {
  return userNameRegExp.test(inputValue);
}
