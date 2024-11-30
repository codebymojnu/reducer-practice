import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
export default function Profile() {
  const {
    user,
    user: { username, email },
    setUser,
  } = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(username);
  const profileStyle = {
    border: "1px solid gray",
    backgroundColor: "lightGray",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "8px",
  };

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleEditName() {
    if (isEdit) {
      setUser({ ...user, username: name });
    }
    setIsEdit(!isEdit);
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Profile</h2>
      <div style={profileStyle}>
        {isEdit ? (
          <input type="text" value={name} onChange={handleChangeName} />
        ) : (
          <div style={{ display: "inline-block", marginRight: "5px" }}>
            Name: {username}
          </div>
        )}
        <button onClick={handleEditName}>
          {isEdit ? "Save" : "Edit Name"}
        </button>
        <div>Email: {email}</div>
      </div>
    </div>
  );
}
