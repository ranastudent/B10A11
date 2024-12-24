import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    if (!/[a-z]/.test(password)) {
      setError({ ...error, password: "must be more than 1 lowercase character" });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError({ ...error, password: "must be more than 1 Uppercase character" });
      return;
    }
    if (password.length < 6) {
      setError({ ...error, password: "password must be more than 6 character long" });
      return;
    }

    createUser(email, password, name, photoURL)
      .then(() => {
        const userData = { email, password, name, photoURL };
        fetch('https://b10-a10-n3.vercel.app/registerUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              Swal.fire({
                icon: "success",
                title: "Welcome",
                text: "Successfully Registered!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              navigate('/');
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Photo URL</label>
          <input type="text" name="photoURL" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" className="w-full px-3 py-2 border rounded" required />
        </div>
        {error.password && (
          <label className="label text-xs text-red-500">
            {error.password}
          </label>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
      <p>Already Registered? <Link to='/login' className='text-red-700'>Login</Link></p>
    </div>
  );
};

export default Register;
