import { headerLogo } from "../assets";

const Navbar = () => {
  return (
    <nav className="border-b-4 border-black">
      <a href="/">
        <img 
          src={headerLogo} 
          alt="work-order Logo" 
          width={180}
          height={180}
          className="mx-auto mt-2"
        />
      </a>
    </nav>
  )
}

export default Navbar;