import React from 'react';

function Navigate(props) {
    return (

        <nav className="navbar navbar-dark bg-white">
            <a href="#intro" className="navbar__item text-dark">
                { props.item }
            </a>
        </nav>

    );
}

export default Navigate;
