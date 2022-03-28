import "./FilterCheckbox.css";
import CheckboxSwitcher from "../CheckboxSwitcher/CheckboxSwitcher";

function FilterCheckbox({ children, isChecked }) {
  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <CheckboxSwitcher checked={isChecked} />
        {children}
      </label>
    </div>
  )
}

export default FilterCheckbox;
