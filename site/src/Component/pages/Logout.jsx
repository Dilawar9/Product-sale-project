import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigator = useNavigate();
  localStorage.removeItem('token');
  navigator("/login")
  return (
    <>
    </>
  )
}

export default Logout;