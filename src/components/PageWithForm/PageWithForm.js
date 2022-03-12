import "./PageWithForm.css";

function PageWithForm({ children }) {
  return (
    <div className="page-with-form">
      <div className="page-with-form__container">
        {children}
      </div>
    </div>
  )
}

export default PageWithForm;
