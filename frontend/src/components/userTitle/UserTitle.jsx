import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const UserTitle = () => {
  const { token } = useSelector((state) => state.login);

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <div className="header">
        <h1>Welcome back</h1>
        <h2>
          {firstName} {lastName}
        </h2>
        <button className="edit-button">Edit Name</button>
      </div>
    </div>
  );
};
