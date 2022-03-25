import "./FormMessage.css";

function FormMessage(props) {
  return (
    <span className="page-with-form__form-message">{props.message}</span>
  )
}

export default FormMessage;
