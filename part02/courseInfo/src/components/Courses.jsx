import Course from "./Course";

const Courses = ({ course }) => {
  return (
    <main className="courses">
      <h1>Courses</h1>
      {course.map((course, id) => (
        <Course key={id} {...course} />
      ))}
    </main>
  );
};

export default Courses;
