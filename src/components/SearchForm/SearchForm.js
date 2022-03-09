import "./SearchForm.css";

function SearchForm({ children }) {
  return (
    <form className="search-form">
      <fieldset className="search-form__input-container">
        <div className="search-form__icon"/>
        {children}
        <button className="search-form__submit-button" type="submit"/>
      </fieldset>
    </form>
  );
}

export default SearchForm;
