import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from './auth/Login';
import Home from './dashboard/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./dashboard/Profile";
import Student from "./dashboard/Student";
import AddStudent from "./dashboard/AddStudent";
import ViewSubject from "./dashboard/ViewSubject";



const App = () => (
    <Router>
        <Header userName="John Doe" />
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/viewSubject" element={<ViewSubject />} />
      </Routes>
    </Router>
);

export default App;
