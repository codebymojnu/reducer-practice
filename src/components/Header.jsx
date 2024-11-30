import { useContext } from "react";
import UserContext from "../contexts/UserContext";
export default function Header({ clickProfile }) {
  const { user } = useContext(UserContext);
  const headerStyle = {
    backgroundColor: "black",
    color: "lightGray",
    padding: "20px",
    gap: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  function handleProflieClick() {
    clickProfile(true);
  }
  return (
    <div style={headerStyle}>
      <div>Home</div>
      <div>About</div>
      <div style={{ cursor: "pointer" }} onClick={handleProflieClick}>
        {user?.username}
      </div>
    </div>
  );
}
