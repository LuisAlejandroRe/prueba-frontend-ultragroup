import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1 className="text-4xl text-blue-500">Home Page</h1>
    </div>
  );
};

export default Home;
