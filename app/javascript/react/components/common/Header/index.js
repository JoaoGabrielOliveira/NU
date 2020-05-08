import React from 'react'
import './index.css'

const Header = (props) => 
{
        return(
            <header>
                {props.children}
            </header>
        );
}

export default Header;