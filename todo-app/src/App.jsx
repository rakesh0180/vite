import "./App.css";
import ToDoList from "./assets/component/todo/ToDoList";

function App() {
  const data = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "Michael Johnson",
    },
    { id: 4, name: "Emily Davis" },
  ];

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>To Do App</h1>
        </header>
        <main className="main">
          <ToDoList data={data} />
        </main>
        <footer className="footer">
          <h3>@copy write 2024</h3>
        </footer>
      </div>
    </>
  );
}

export default App;
