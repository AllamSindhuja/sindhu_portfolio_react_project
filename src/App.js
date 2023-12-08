import Header from "./layouts/Header";
import ROUTES from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ROUTES />
      </main>
    </>
  );
};

export default App;
