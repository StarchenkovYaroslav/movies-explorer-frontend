import "./CheckboxSwitcher.css";

function CheckboxSwitcher({ checked }) {
  const switcherClassName = !checked ? 'switcher' : 'switcher switcher_checked';
  const indicatorClassName = !checked ? 'switcher__indicator' : "switcher__indicator switcher__indicator_checked";

  return (
    <div className={switcherClassName}>
      <div className={indicatorClassName} />
    </div>
  );
}

export default CheckboxSwitcher;
