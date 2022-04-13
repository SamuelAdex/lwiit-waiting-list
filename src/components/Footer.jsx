import React from 'react'

const Footer = () => {
    const formattedYear = () => {
        const year = new Date();
        return year.getFullYear();
    }
  return (
    <div className="footer">
        <small>&copy; lwiit Copyrights {formattedYear()} | All Rights Reserved</small>
    </div>
  )
}

export default Footer