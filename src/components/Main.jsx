import { useContext, useEffect, useReducer, useState } from "react";
import UserContext from "../contexts/UserContext";
import amountReducer from "../reducers/amountReducer";
import Transaction from "./Transaction";

export default function Main() {
  const [error, setError] = useState("");
  const {
    user,
    user: { amount, name },
    setUser,
  } = useContext(UserContext);
  const [state, dispatch] = useReducer(amountReducer, user);

  useEffect(() => {
    setUser(state);
  }, [state, setUser]);

  function handleTransaction(e, type, transactionAmount) {
    dispatch({ type: type, payload: transactionAmount });
  }

  return (
    <div>
      <div className="dashboard-style">
        <p>Name: {name}</p>
        <p>
          Money: <span style={{ color: "red" }}>{amount}</span>
        </p>
        {error && (
          <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
            {error}
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Transaction
          handleTransaction={handleTransaction}
          type="Deposit"
          setError={setError}
        />

        <Transaction
          handleTransaction={handleTransaction}
          type="Withdraw"
          setError={setError}
        />
      </div>
    </div>
  );
}
