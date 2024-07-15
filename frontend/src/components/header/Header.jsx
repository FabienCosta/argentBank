import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Header = () => {
  const { token } = useSelector((state) => state.login);
  const pseudo = useSelector((state) => state);
  console.log(pseudo);
  console.log(token);

  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="../">
          <img
            className="main-nav-logo-image"
            src="src\assets\images\argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
        </a>
        <div>
          <a className="main-nav-item" href="../signIn">
            <FontAwesomeIcon icon={faCircleUser} />
            {token ? "Sign Out" : "Sign In"}
            <i className="fa fa-user-circle"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};
