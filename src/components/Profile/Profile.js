import ProfileGreeting from "../ProfileGreeting/ProfileGreeting";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileExit from "../ProfileExit/ProfileExit";

function Profile() {
  return (
    <>
      <ProfileGreeting />
      <ProfileEdit />
      <ProfileExit />
    </>
  );
}

export default Profile;