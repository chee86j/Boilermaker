import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { fetchStudents } from "../store/students";
// import { fetchCampuses } from "../store/campuses";

// // COMPONENT IMPORTS BELOW
// // imports Nav component
// import Nav from "./Nav";
// // imports for all campuses and students
// import Campuses from "./Campuses.js";
// import Students from "./Students";
// // imports for a single campus and a single student
// import Campus from "./Campus";
// import Student from "./Student";
// // imports for updating a campus and a student
// import UpdateCampus from "./UpdateCampus";
// import UpdateStudent from "./UpdateStudent";

export const App = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();
      setUsers(json);
    };
    fetchUsers();
  }, []);

  //   useEffect(() => {
  //     dispatch(fetchStudents());
  //     dispatch(fetchCampuses());
  //   }, [dispatch]);

  return (
    <Router>
      <div>
        <Link to="/">
          <h1>Boilermaker - Boilermaker Management System ({users.length})</h1>
          <ul>
            {users.map((user) => {
              return <li key={user.id}>{user.username}</li>;
            })}
          </ul>
        </Link>
        <Nav />
        <Routes>
          {/* <Route path="/students" element={<Students />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/campuses/:id" element={<Campus />} />
          <Route path="/campuses/:id/update" element={<UpdateCampus />} />
          <Route path="/students/:id/update" element={<UpdateStudent />} /> */}
        </Routes>
      </div>
    </Router>
  );
};
