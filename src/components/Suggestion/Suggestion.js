import "./Suggestion.css";
import {Link} from "react-router-dom";

function Suggestion({ questionText, linkPath, linkText }) {
  return (
    <div className="page-with-form__suggestion">
      <span className="page-with-form__suggestion-question">{questionText}</span>
      <Link to={linkPath} className="page-with-form__suggestion-link">{linkText}</Link>
    </div>
  );
}

export default Suggestion;
