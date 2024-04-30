import logo from "./logo.png";
let Header = ({ tab, onTabChange }) => {
  return (
    <>
      <header>
        <img className="NAV-IMG" src={logo} alt="" />
        <a href="/" class="logo">
          Software Synergy Solutions
        </a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
          <ul>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("home");
              }}
            >
              <a className={`${tab === "home" && "active"}`} href="#home">
                Home
              </a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("about");
              }}
            >
              <a className={`${tab === "about" && "active"}`} href="">
                About
              </a>
            </li>
            <li>
              <a href="#skills">Services</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("gallery");
              }}
            >
              <a className={`${tab === "gallery" && "active"}`} href="">
                Gallery
              </a>
            </li>
            <li>
              <a href="#experience">Team</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                onTabChange("contact");
              }}
            >
              <a className={`${tab === "contact" && "active"}`} href="">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
