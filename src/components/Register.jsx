import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
      return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form>
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
              {/* {error.password && (
                <label className="label text-xs text-red-500">
                  {error.password}
                </label>
              )} */}
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Register
              </button>
            </form>
            <p>Already Registered? <Link to='/login'>Login</Link></p>
          </div>
      );
};

export default Register;