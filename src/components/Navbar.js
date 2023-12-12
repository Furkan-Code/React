import React from 'react'
import Logo from "../assets/Ekran görüntüsü 2023-11-29 211318.png"
import Logo1 from "../assets/afetankanet.png"
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>

      <div className='leftSide'>
        <img src={Logo}></img>
      </div>
      <div className='resim' style={{ backgroundImage: `url(${Logo1})` }}></div>
      <div className='rightSide'>
        <Link to="/" style={{ backgroundColor: '#8CDBD6', marginRight: '10px', padding: '5px 10px', borderRadius: '5px', borderRadius: '25px' }}> Giriş</Link>
        <Link to="/" style={{ backgroundColor: '#FDEF80', padding: '5px 10px', borderRadius: '5px', borderRadius: '25px' }}> Kayıt</Link>
      </div>
    </div>

  )
}

export default Navbar