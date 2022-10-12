import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import "./App.css";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
  console.log(course);

  return (
    <div>
      <Header {...course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
