import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="bg-gray-800 w-full max-w-lg rounded-lg shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-amber-400 text-center">Welcome to the Home Page</h1>
        <p className="text-md text-gray-400 text-center">This is the landing page. Please navigate to sign in or sign up.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/signin" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500">
            Sign In
          </Link>
          <Link to="/signup" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;