import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Login</h2>
                  <form>
                        <div className="mb-4">
                              <label className="block text-gray-700">Email</label>
                              <input type="email" name='email' className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                              <label className="block text-gray-700">Password</label> <input type="password" name='password' className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"> Login </button> </form>
                        <br /><p>or</p>
                        <div className='flex'>
                        <p className=' btn text-[#AA336A]'>Login With Gmail</p>
                        </div>
                        <p>Not Account?<Link to='/register'>Register</Link></p> 
                        </div>
      );
};

export default Login;