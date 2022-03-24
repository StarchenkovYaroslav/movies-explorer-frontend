import {useCallback, useEffect, useState} from "react";


export function useFormWithValidation(
  initialInputValues, initialInputsValidity, initialInputErrorMessages, initialIsFormValid, customValidators
) {
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [inputsValidity, setInputsValidity] = useState(initialInputsValidity)
  const [inputErrorMessages, setInputErrorMessages] = useState(initialInputErrorMessages);

  const [isFormValid, setIsFormValid] = useState(initialIsFormValid);

  useEffect(() => {
    setIsFormValid(Object.values(inputsValidity).every(validity => validity === true));
  }, [inputsValidity])

  const handleInputChange = (evt) => {
    const inputElement = evt.target;
    const name = inputElement.name;
    const value = inputElement.type === 'checkbox' ? inputElement.checked : inputElement.value;

    let isValid = false;
    let validationMessage = '';
    if (customValidators && customValidators[name] && value !== '') {
      isValid = customValidators[name].validate(value);
      validationMessage = !isValid ? customValidators[name].message : '';
    } else {
      isValid = inputElement.validity.valid;
      validationMessage = inputElement.validationMessage;
    }

    setInputValues((inputValues) => {
      return {
        ...inputValues,
        [name]: value
      }
    });

    setInputsValidity((inputsValidity) => {
      return {
        ...inputsValidity,
        [name]: isValid
      }
    });

    setInputErrorMessages((inputErrorMessages) => {
      return {
        ...inputErrorMessages,
        [name]: validationMessage
      }
    });
  }

  const resetForm = useCallback((newInputValues, newInputsValidity, newErrorMessages, newIsFormValid) => {
    setInputValues(newInputValues);
    setInputsValidity(newInputsValidity);
    setInputErrorMessages(newErrorMessages);
    setIsFormValid(newIsFormValid);
  }, []);

  return {inputValues, setInputValues, inputsValidity, inputErrorMessages, isFormValid, handleInputChange, resetForm};
}