import { Header } from "../header";

export const Layout = ({ children }) => {
  return (
    <div id="App" className="pb-8">
      <Header />
      {children}
    </div>
  );
};
