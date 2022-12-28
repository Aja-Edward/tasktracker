import React from 'react'

const Footer = ({ showAdd }) => {
    return (
        <footer className={showAdd ? 'footer' : 'footer1'}>
            <p>Copyright &copy; 2023</p>
            <a href='/about'> About</a>
        </footer>
    )
}

export default Footer
