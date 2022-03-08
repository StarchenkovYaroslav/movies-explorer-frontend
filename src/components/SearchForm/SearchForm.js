import "./SearchForm.css";
import CheckboxSwitcher from "../CheckboxSwitcher/CheckboxSwitcher";

import { useState } from "react";

function SearchForm() {
  const [isShortChecked, setIsShortChecked] = useState(false);

  function shortCheckboxHandler(evt) {
    setIsShortChecked(evt.target.checked);
  }

  return (
    <form className="search-form">
      <fieldset className="search-form__input-container">
        <div className="search-form__icon"/>
        <input className="search-form__input" type="text" placeholder="Фильм"/>
        <button className="search-form__submit-button" type="submit"/>
      </fieldset>
      <label className="search-form__short-checkbox-container">
        <input className="search-form__short-checkbox" type="checkbox" value="short" onChange={shortCheckboxHandler}/>
        <CheckboxSwitcher checked={isShortChecked} />
        <span className="search-form__short-checkbox-name">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
