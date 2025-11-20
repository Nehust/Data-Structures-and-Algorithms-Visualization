import {
  BsEnvelopeFill,
  BsFillHouseFill,
  BsFillSunFill,
  BsGithub,
  BsInfoCircleFill,
  BsMoonFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import {useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../css/App.css";    




const Header = ({ theme, toggleTheme }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {setMenuVisible(prevMenuVisible => !prevMenuVisible);};
  const menuClass = {
    true: "visible",
    false: "hidden",
  };

  return (
    <>
      <div className="header">
        {/*menu */}
        <div id="menu">
          <IconContext.Provider value={{ className: "menu-bar" }}>
            <RxHamburgerMenu onClick={toggleMenu} size={20} />
          </IconContext.Provider>
        </div>

        {/*title*/}
        <div id="title">
          <h1>Data Structures & Algorithms Visualization</h1>
        </div>
        {/*gimmicks */}
        <div className="gimmicks">
          <div id="theme">
            {theme === "light" ? (
              <BsFillSunFill
                size={22}
                onClick={toggleTheme}
                color="#f9c333"
                className="rotate-effect"
              />
            ) : (
              <BsMoonFill
                size={20}
                onClick={toggleTheme}
                color="#3498db"
                className="rotate-effect"
              />
            )}
          </div>
        </div>
      </div>
      {/*menu items */}
      <div className={`menu ${menuClass[menuVisible]}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <BsFillHouseFill size={20} />
              &nbsp;&nbsp;Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <BsInfoCircleFill size={20} />
              &nbsp;&nbsp;About
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/csvistool/visualization-tool"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={20} />
              &nbsp;&nbsp;Source Code
            </a>
          </li>
          <li>
            <a
              href="https://forms.gle/j9iMhFi8drjf2PU86"
              target="_blank"
              rel="noreferrer"
            >
              <BsEnvelopeFill size={20} />
              &nbsp;&nbsp;Feedback
            </a>
          </li>
        </ul> 
      </div>
    </>
  );
};
export default Header;
