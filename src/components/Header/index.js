import React from 'react'
import { HeaderComponent } from './style';
import { Link } from 'react-router-dom';

const Header = () => { 
    return (
        <HeaderComponent>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <Link className="navbar-brand" to="/">Tv Series</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </HeaderComponent>
    );
};


export default Header;