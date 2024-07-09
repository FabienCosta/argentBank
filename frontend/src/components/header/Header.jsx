import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
};

export { Header };
