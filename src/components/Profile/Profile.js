import "./Profile.css";

import ProfileGreeting from "../ProfileGreeting/ProfileGreeting";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileExit from "../ProfileExit/ProfileExit";

function Profile() {
  return (
    <div className="profile">
      <ProfileGreeting />
      <ProfileEdit />
      <ProfileExit />
    </div>
  );
}

export default Profile;