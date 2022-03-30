import "./SearchForm.css";

function SearchForm({ children, onSubmit, areMoviesLoading }) {
  const submitButtonClassName = `search-form__submit-button${areMoviesLoading ? ' search-form__submit-button_disabled' : ''}`;
  const isSubmitButtonActive = !areMoviesLoading;

  return (
    <form className="search-form" noValidate={true} onSubmit={onSubmit}>
      <fieldset className="search-form__input-container">
        <div className="search-form__icon"/>
        {children}
        <button className={submitButtonClassName} type="submit" disabled={!isSubmitButtonActive}/>
      </fieldset>
    </form>
  );
}

export default SearchForm;
