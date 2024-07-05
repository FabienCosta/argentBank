import { Account } from "../../components/account/Account";
import { UserTitle } from "../../components/userTitle/UserTitle";
import "./user.scss";

const User = () => {
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
