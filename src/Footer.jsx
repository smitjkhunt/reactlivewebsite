import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <>
        <footer className='w-100 bg-light text-center'>
            <p>©️ {date} SmitKhunt</p>
        </footer>
    </>
  )
}

export default Footer