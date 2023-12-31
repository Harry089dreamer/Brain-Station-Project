import "./Navbar.css"
import { FaBell,FaSignOutAlt} from "react-icons/fa"
import logo from './logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <img style={{ width: 50}} src={logo} alt="Logo"/>
          <span > <h2 >Brain Station 23 </h2></span>
        </div>

        <div className="icons">
            <div className="search">
              <input 
              className="textbox" 
              type="text" 
              placeholder="search..."
              />
                <span className="icon"> 🔍 
                </span>
            </div> 
            <div className="notification">
                <FaBell style={{ width: 25, height: 25}}  className="icon"/>
                <span>1</span>
            </div>

            <div className="user">
                <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/> 
            </div>

            <FaSignOutAlt style={{ width: 25, height: 25}} className="icon"/>
        </div>
    </div>
    
  )
}

export default Navbar
