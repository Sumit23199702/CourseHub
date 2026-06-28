import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import {toast} from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    role: "student",
    profileImage: "",
    bio: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let response = await api.post(
        "/users/signup",
        user
      );

      toast.success(response.data.msg);

      setUser({
        name: "",
        email: "",
        contactNo: "",
        password: "",
        role: "student",
        profileImage: "",
        bio: "",
      });

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.msg ||
          "Something Went Wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-125 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        />

        <input
          type="text"
          name="contactNo"
          placeholder="Enter Phone Number"
          value={user.contactNo}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        />

        <input
          type="text"
          name="profileImage"
          placeholder="Enter Profile Image URL"
          value={user.profileImage}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        />

        <textarea
          name="bio"
          placeholder="Enter Bio"
          value={user.bio}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded-md mb-4 resize-none"
        ></textarea>

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4"
        >
          <option value="student">
            Student
          </option>

          <option value="instructor">
            Instructor
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already Have An Account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;