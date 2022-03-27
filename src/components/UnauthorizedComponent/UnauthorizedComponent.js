import {Navigate} from "react-router-dom";

import {paths} from "../../utils/config";

function UnauthorizedComponent(props) {
  return (
    !props.loggedIn ? props.component : <Navigate to={'/' + paths.movies} />
  )
}

export default UnauthorizedComponent;
