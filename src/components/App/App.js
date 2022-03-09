import "./App.css";

import { Routes, Route } from "react-router-dom";

import { paths } from "../../utils/config";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {

  return (
    <div className="page">

      <Header loggedIn={true} />

      <main className="content">
        <Routes>

          <Route path={paths.main} element={<Main/>} />
          <Route path={paths.movies} element={<Movies/>} />
          <Route path={paths.savedMovies} element={<SavedMovies/>} />
          <Route path={paths.profile} element={<Profile/>} />
          <Route path={paths.signIn} element={<Login/>} />
          <Route path={paths.signUp} element={<Register/>} />

        </Routes>
      </main>

      <Footer/>

    </div>
  )
}

export default App;