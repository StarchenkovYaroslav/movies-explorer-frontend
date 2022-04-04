import "./ProfileExit.css";

function ProfileExit({ onExit, isSigningOut }) {
  const isButtonActive = !isSigningOut;
  const buttonClassName = `profile-exit__button${!isButtonActive ? ' profile-exit__button_disabled' : ''}`;

  return (
    <section className="profile-exit">
      <button className={buttonClassName} type="button" disabled={!isButtonActive} onClick={onExit}>Выйти из аккаута</button>
    </section>
  );
}

export default ProfileExit;
