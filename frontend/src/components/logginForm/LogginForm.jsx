import "./logginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export const Loggin = () => {
  //? je veux recuperer le resultat de l'input et le comparer a la bdd et ensuite autoriser l'acces sinon afficher un message d'erreur
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    dispatch(Loggin(username, password));
  };

  return (
    <div>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <i className="fa fa-user-circle"></i>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onClick={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="./user.html" className="sign-in-button">
            Sign In
          </a>
          {/* <button className="sign-in-button">Sign In</button> */}
        </form>
      </section>
    </div>
  );
};
