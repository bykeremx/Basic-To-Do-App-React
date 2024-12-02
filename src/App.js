import Header from "./components/Header";
import AddToTask from "./components/AddToTask";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';

function App() {
  const [Todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputValues = {
    title: title,
    setTitle: setTitle,
    content: content,
    setContent: setContent
  }

  // addTask functionu eklenecek
  const AddTask = (title, content) => {
    try {
      const newTodo = {
        title: title,
        content: content,
        date: Date.now(),
        id: Math.random() * 1000 // unique id
      }
      setTodos([...Todos, newTodo]);
      setTitle("");
      setContent("");
      toast.success('🦄 Not Eklendi !', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  //Update Task 


  const updateTask = (updatedTitle, updatedContent, id) => {
    try {
      const updatedTodos = Todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, title: updatedTitle, content: updatedContent };
        }
        return todo;
      });
      setTodos(updatedTodos)
      toast.success('🦄 Not Güncellendi  !', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    } catch (error) {

      console.log(error.message);

    }
  }
  //delete todo 
  const deleteTodo = (id) => {
    try {
      const updatedTodos = Todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      toast.success('Başarı ile  Silindi !', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      {/* header components ekleyeceğim  */}
      <Header />
      {/* Add to task componenti ekleyeceğim */}+
      <AddToTask inputValues={inputValues} AddTaskFunc={AddTask} />
      {/* Task List componenti ekleyeceğim */}
      <div className='container mt-6 mb-5'>
        <div class="fixed-grid has-4-cols">
          <div class="grid">

            {
              Todos ? Todos.map((todo) => (
                <TaskList deleteTodo={deleteTodo} key={todo.id} Todos={todo} UpdateTaskFunc={updateTask} />
              )) : "Şuan Todos Yok "
            }
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
