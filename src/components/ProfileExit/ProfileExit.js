import "./ProfileExit.css";

function ProfileExit({ onExit }) {
  return (
    <section className="profile-exit">
      <button className="profile-exit__button" type="button" onClick={onExit}>Выйти из аккаута</button>
    </section>
  );
}

export default ProfileExit;
