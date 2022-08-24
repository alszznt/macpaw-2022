import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './search-breeds-input.scss';

const SearchBreedsInput = ({ value, onSearchChange, onSearch }) => {

    const [placeholder, setPlaceholder] = useState('Search for breeds by name');
    const [classN, setClassN] = useState('search-breeds-input');

    const onSubmit = (e) => {
        e.preventDefault();
        if ( value.length !== 0 ){
            onSearch()
            navigate("/search", { replace: true })
        }else{
            setPlaceholder('Enter breed name')
        }
    };

    const sendForm = (func) => {
        if ( value.length !== 0 ){
            func()
        }else{
            setClassN('search-breeds-input search-breeds-input-active')
        }
    }

    let navigate = useNavigate();

    return(
        <form className = { classN } onSubmit = { onSubmit }>
            <input 
                className = "search-breeds-input-value"
                type = "text"
                placeholder = { placeholder }
                value={ value }
                onChange={ (e) => onSearchChange(e.target.value) }
            />
            {
                value.length === 0 ?
                <div 
                    className = "search-breeds-input-icon-button"
                    onClick = {() => sendForm(onSearch) }>
                    <div className = "search-breeds-input-icon" />
                </div> :
                <Link 
                    to = '/search' 
                    className = "search-breeds-input-icon-button"
                    onClick = {() => sendForm(onSearch) }>
                    <div className = "search-breeds-input-icon" />
                </Link>
            }
        </form>
    );
}

export default SearchBreedsInput;