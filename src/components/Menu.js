import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={'nav'}>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/about/sooho" activeClassName="active">About sooho</NavLink></li>
                <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;