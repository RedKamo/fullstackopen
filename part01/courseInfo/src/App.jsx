import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import "./App.css";

function App() {
  const course = "Half Stack application development";
  const content = [
    {
      title: "Fundamentals of React",
      exercises: 10,
    },
    {
      title: "Using props to pass data",
      exercises: 7,
    },
    {
      title: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
}

export default App;
