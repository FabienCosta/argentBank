import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../store/actions/actions";

export const Header = () => {
  const { token } = useSelector((state) => state.login);
  console.log(token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
          {!token ? (
            <a className="main-nav-item" href="../signIn">
              <FontAwesomeIcon icon={faCircleUser} />
              <i className="fa fa-user-circle"></i>
              {"Sign In"}
            </a>
          ) : (
            ""
          )}
          {token ? (
            <a className="main-nav-item" href="../user">
              <FontAwesomeIcon icon={faCircleUser} />
              <i className="fa fa-user-circle"></i>
              {"Iron"}
            </a>
          ) : (
            ""
          )}
          {token ? (
            <a className="main-nav-item" onClick={logoutHandler} href="../">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <i className="fa fa-sign-out"></i>
              {"Sign out"}
            </a>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};
