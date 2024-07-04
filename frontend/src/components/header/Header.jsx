import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleUse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="src\assets\images\argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <FontAwesomeIcon icon={faCircleUse} />
            <i className="fa fa-user-circle">lala</i>
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
};

export { Header };
