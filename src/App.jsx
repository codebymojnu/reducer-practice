import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import UserProvider from "./providers/UserProvider";

const App = () => {
  const [profileClick, setProfileClick] = useState(false);
  const profileStyle = {
    border: "1px solid gray",
    backgroundColor: "lightGray",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "8px",
  };
  return (
    <UserProvider>
      <Header clickProfile={setProfileClick} />
      {profileClick ? (
        <Profile />
      ) : (
        <div>
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>Profile</h2>
          <div style={profileStyle}>
            <div>Hello Guest!</div>
          </div>
        </div>
      )}
    </UserProvider>
  );
};

export default App;
