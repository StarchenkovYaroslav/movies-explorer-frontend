import "./Profile.css";

import ProfileGreeting from "../ProfileGreeting/ProfileGreeting";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileExit from "../ProfileExit/ProfileExit";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileGreeting />
      <ProfileEdit onEditProfile={props.onEditProfile} />
      <ProfileExit onExit={props.onSignOut} />
    </div>
  );
}

export default Profile;