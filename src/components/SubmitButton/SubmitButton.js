import "./SubmitButton.css";

function SubmitButton({ text, isActive }) {
  const buttonClassName = isActive ? 'page-with-form__submit-button' : 'page-with-form__submit-button page-with-form__submit-button_disabled'

  return (
    <button className={buttonClassName} disabled={!isActive}>{text}</button>
  )
}

export default SubmitButton;
