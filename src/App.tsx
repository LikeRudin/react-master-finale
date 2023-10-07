import { Outlet } from "react-router-dom";

import Header from "./components/header-components/header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
