import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header.jsx";
import Todos from "./MyComponents/Todos.jsx";
import Footer from "./MyComponents/Footer.jsx";
import AddTodo from "./MyComponents/AddTodo.jsx";
import About from "./MyComponents/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [searchTerm, setSearchTerm] = useState("");

  const onDelete = (todo) => {
    console.log("I am OnDelete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const onUpdate = (todo) => {
    const newTitle = prompt("Enter new title", todo.title);
    const newDesc = prompt("Enter new description", todo.desc);

    if (
      newTitle !== null &&
      newTitle.trim() !== "" &&
      newDesc !== null &&
      newDesc.trim() !== ""
    ) {
      setTodos(
        todos.map((item) =>
          item.sno === todo.sno
            ? {
                ...item,
                title: newTitle,
                desc: newDesc,
              }
            : item
        )
      );
    }
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header
          title="My Todos List"
          searchBar={true}
          setSearchTerm={setSearchTerm}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={filteredTodos}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App; 