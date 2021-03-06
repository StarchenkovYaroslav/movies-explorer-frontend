import "./Input.css";

function Input(props) {
  return (
    <fieldset className="page-with-form__input">
      <label className="page-with-form__input-label" htmlFor={props.id}>{props.label}</label>
      <input
        className="page-with-form__input-field"
        required={props.required}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      <span className="page-with-form__input-validation-message">{props.validationMessage}</span>
    </fieldset>
  )
}

export default Input;
