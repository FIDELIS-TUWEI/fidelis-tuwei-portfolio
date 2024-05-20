import { headerLogo } from "../assets";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} alt="work-order Logo" />
        </a>
      </nav>
    </header>
  )
}

export default Navbar;