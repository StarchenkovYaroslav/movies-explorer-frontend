import "./FilterCheckbox.css";
import CheckboxSwitcher from "../CheckboxSwitcher/CheckboxSwitcher";

function FilterCheckbox({ children, isChecked }) {
  return (
    <label className="checkbox">
      <CheckboxSwitcher checked={isChecked} />
      {children}
    </label>
  )
}

export default FilterCheckbox;
