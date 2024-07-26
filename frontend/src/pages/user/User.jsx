import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserTitle } from "../../components/userTitle/UserTitle";
import { Account } from "../../components/account/Account";
import "./user.scss";

const User = () => {
  let navigate = useNavigate();

  const { token } = useSelector((state) => state.login);

  useEffect(() => {
    if (token === null) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return (
    <div>
      <main className="main bg-dark">
        <UserTitle />
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
    </div>
  );
};

export { User };
