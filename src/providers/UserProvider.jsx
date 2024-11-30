import { useState } from "react";
import UserContext from "../contexts/UserContext";
import { userData } from "../data/userData";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
