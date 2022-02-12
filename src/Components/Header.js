import React, { useState } from 'react';
import './Styles.css';

const Header = (props) => {
    const [searchFilter, setSearchFilter] = useState('');
    return (
        <nav class="navbar justify-content-between Nav-container">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-md-3">
                        <a class="navbar-brand" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                    </div>
                    {props.enableSearch && <div class="col-md-9">
                        <form class="form-inline d-flex" onSubmit={(e) => {
                            e.preventDefault();
                            props.onClick(searchFilter);
                        }}>
                            <input class="form-control mr-sm-2 SearchBar" type="search" placeholder="Search" aria-label="Search"
                                value={searchFilter}
                                onChange={(e) => setSearchFilter(e.target.value)} />
                            <div class="btn btn-light ml-5"
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
