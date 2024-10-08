import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../store/actions/actions";
import "./logginForm.scss";

export const Loggin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { token, error } = useSelector((state) => state.login);

  //? cette fonction permet de gérer la soumission du formulaire de connexion et de vérifier si les identifiants sont corrects
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(email, password));
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/user");
      } else {
        const { message } = response.data;
        setErrorMessage(message || "Identifiants incorrect");
      }
    } catch (error) {
      setErrorMessage("Identifiants incorrect");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token, navigate]);

  return (
    <div className="sign-in-box">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <i className="fa fa-user-circle"></i>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button" type="submit" name="Login">
            Sign In
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </section>
    </div>
  );
};
