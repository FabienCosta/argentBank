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
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export { User };
