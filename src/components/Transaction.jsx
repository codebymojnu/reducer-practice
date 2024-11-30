import { useContext, useState } from "react";
import UserContext from "./../contexts/UserContext";
export default function Transaction({ handleTransaction, type, setError }) {
  const { user } = useContext(UserContext);
  const [transactionAmount, setTransactionAmount] = useState("");
  return (
    <form className="form-group">
      <input
        type="text"
        name="Deposit"
        id="Deposit"
        value={transactionAmount}
        onChange={(e) => {
          setError("");
          setTransactionAmount(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (type == "Withdraw" && transactionAmount > user.amount) {
            setError("Withdraw not possible!");
          }
          handleTransaction(e, type, transactionAmount);
          setTransactionAmount("");
        }}
      >
        {type}
      </button>
    </form>
  );
}
