import React, { useState } from 'react';
import './Styles.css';

const Header = (props) => {
    const [searchFilter, setSearchFilter] = useState('');
    return (
        <nav className="navbar justify-content-between Nav-container">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-md-3">
                        <a className="navbar-brand" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                    </div>
                    {props.enableSearch && <div className="col-md-9">
                        <form className="form-inline d-flex" onSubmit={(e) => {
                            e.preventDefault();
                            props.onClick(searchFilter);
                        }}>
                            <input className="form-control mr-sm-2 SearchBar" type="search" placeholder="Search" aria-label="Search"
                                value={searchFilter}
                                onChange={(e) => setSearchFilter(e.target.value)} />
                            <div className="btn btn-light ml-5"
                                onClick={() => { props.onClick(searchFilter) }}>Search
                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        </nav>
    );
}
export default Header;
