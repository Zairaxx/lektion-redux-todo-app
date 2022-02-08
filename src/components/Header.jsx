import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setName} from '../redux/ducks/header'
const Header = () => {
    let dispatch = useDispatch();
    const name = useSelector((state) => state.header.name)
    const handleName = (e) => {
        const name = e.target.previousElementSibling.value;
        dispatch(setName(name))

    }

    return (
        <div>
            <h2>{name}s Todo-list</h2>
            <input type="text"/>
            <button onClick={handleName}>Enter name</button>
        </div>
    )
}

export default Header
