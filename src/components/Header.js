import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    // const onClick = () => {
    //     console.log('handleclick')
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
                color={showAdd ? 'blue' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header
