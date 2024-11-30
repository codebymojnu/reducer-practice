export default function amountReducer(state, action) {
    switch (action.type) {
        case "Deposit":
            return { ...state, amount: state.amount + Number(action.payload) }
        case "Withdraw":
            if (state.amount - Number(action.payload) < 0) {
                return state;
            }
            return { ...state, amount: state.amount - Number(action.payload) }
        default:
            return state;
    }
}