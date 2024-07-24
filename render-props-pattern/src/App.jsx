import "./App.css";
import CCApp from "./component/CCApp";
import USD from "./component/USD";

function App() {
  return (
    <>
      <CCApp
        render={(amount) => {
          return <USD amount={amount} />;
        }}
      />
    </>
  );
}

export default App;
