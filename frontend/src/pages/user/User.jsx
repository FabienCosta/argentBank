import { useSelector } from "react-redux";
import { Account } from "../../components/account/Account";
import { UserTitle } from "../../components/userTitle/UserTitle";
import "./user.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const User = () => {
  let navigate = useNavigate();

  const { token } = useSelector((state) => state.login);
  console.log(token);

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
        <Account />
        <Account />
      </main>
    </div>
  );
};

export { User };
