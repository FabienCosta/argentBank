import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateUserProfile } from "../../store/actions/actions";

export const UserTitle = () => {
  const { token } = useSelector((state) => state.login);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const dispatch = useDispatch();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [editButton, setEditButton] = useState("");
  const { succes } = useSelector((state) => state.user);
  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton((current) => !current);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(token, newFirstName, newLastName));
    // eslint-disable-next-line no-constant-condition
    if ({ succes }) {
      setEditButton((current) => !current);
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

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
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
