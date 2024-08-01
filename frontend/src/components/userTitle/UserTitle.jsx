import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUserProfile } from "../../store/actions/actions";
import "./userTitle.scss";

export const UserTitle = () => {
  const { token } = useSelector((state) => state.login);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);
  const { succes } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // const [newFirstName, setNewFirstName] = useState();
  // const [newLastName, setNewLastName] = useState();
  const [newUserName, setNewUserName] = useState();
  const [editButton, setEditButton] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton((current) => !current);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(token, newUserName));
    if (succes) {
      setEditButton((current) => !current);
    }
  };

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder={userName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
              />
              <label htmlFor="firstName">First name</label>
              <input type="text" placeholder={firstName} disabled required />
              <label htmlFor="lastName">Last name</label>
              <input type="text" placeholder={lastName} disabled required />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={submitHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
