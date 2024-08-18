import { Link } from "react-router-dom";
import Logo from "../Logo";
const Header = () => {
  return (
    <header className="bg-[#222831] flex h-[50px] w-full">
      <Logo />
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">about me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contactMe">contact me</Link>
      </div>
    </header>
  );
};

export default Header;
