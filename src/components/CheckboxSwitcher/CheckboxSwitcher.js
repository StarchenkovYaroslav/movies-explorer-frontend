import "./CheckboxSwitcher.css";

function CheckboxSwitcher({ checked }) {
  const switcherClassName = !checked ? 'switcher' : 'switcher switcher__checked';

  return (
    <div className={switcherClassName}>
      <div className="switcher__indicator" />
    </div>
  );
}

export default CheckboxSwitcher;
