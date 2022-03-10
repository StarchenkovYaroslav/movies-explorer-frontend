import "./ProfileEdit.css";

function ProfileEdit() {
  return (
    <section className="profile-edit">
      <form className="profile-edit__form">
        <div className="profile-edit__inputs-container">
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="name">Имя</label>
            <input className="profile-edit__input" id="name" name="name" type="text" placeholder="Имя" />
          </fieldset>
          <fieldset className="profile-edit__input-container">
            <label className="profile-edit__input-label" htmlFor="email">E-mail</label>
            <input className="profile-edit__input" id="email" name="email" type="email" placeholder="email" />
          </fieldset>
        </div>
        <button className="profile-edit__submit-button" type="submit">Редактировать</button>
      </form>
    </section>
  );
}

export default ProfileEdit;
