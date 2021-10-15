import React from 'react'
import './Header.css';
import SearchIcon from
'@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <Link to="/">
           <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
            <LocationOnOutlinedIcon  className="header__locationIcon"/>
              </Link>
          
              <div className="header__address">


            <div className="header__addressLineOne">Hello
            </div>
            <div className="header__addressLineTwo">Select your address
            </div> 
            </div>
          
            <div className="header__search">
                <input className="header__searchInput"
             type="text" /> 
             {/* Material UI */} 
             <SearchIcon className="header__searchIcon"/>
         </div>
         <div className="header__nav">
            <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Order</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>

          </div>  

          <Link to="/checkout">
          <div className="header__optionBasket">
          <ShoppingCartIcon/>
          <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
          </Link>
        </div>
    )
}

export default Header