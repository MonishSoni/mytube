import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {Searchbar} from "../components"

// import { logo } from "../utils/constants";
import Logoimg from "../images/logo.png"

const Navbar = () => {
  return (
    <Stack direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#202020', top: '0', justifyContent: 'space-between',zIndex:'11' }}>

      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img className='mleft' src={Logoimg} alt="logo" height={45} />
      </Link>

      <Searchbar/>
    </Stack>
  )
}

export default Navbar