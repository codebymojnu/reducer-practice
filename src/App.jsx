import Main from "./components/Main";
import UserProvider from "./providers/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};

export default App;
