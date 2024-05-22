import { headerLogo } from "../assets";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="work-order Logo" 
            width={180}
            height={180}
          />
        </a>
      </div>
      <div>
        <p>Support</p>
      </div>
      <div>
        <ul>
          <li><a href="">Solutions</a></li>
          <li><a href=""></a>Why Work-orders</li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;