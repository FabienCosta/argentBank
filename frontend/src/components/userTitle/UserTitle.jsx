import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const UserTitle = () => {
  const { token } = useSelector((state) => state.login);

  console.log(token);
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
        <button className="edit-button">Edit Name</button>
      </div>
    </div>
  );
};
