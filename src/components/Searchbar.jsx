import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const Searchbar = () => {

  const [searchterm, setSearchterm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
      e.preventDefault();

      if(searchterm){
            navigate(`/search/${searchterm}`)
      }

      setSearchterm("")
  }
  return (
    <Paper component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: '20px', border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>
      <input
        className="search-bar"
        placeholder='Search ...'
        type="text" value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)} />
      <IconButton 
       type='submit'
      sx={{p:'10px', color:'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default Searchbar;