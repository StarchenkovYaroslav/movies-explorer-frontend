import {Navigate} from "react-router-dom";

import {paths} from "../../utils/config";

function AuthorizedComponent(props) {
  return (
    props.loggedIn ? props.component : <Navigate to={'/' + paths.signIn} />
  )
}

export default AuthorizedComponent;
