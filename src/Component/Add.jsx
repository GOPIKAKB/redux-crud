import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, updateData, resetData } from '../redux/itemSlice'

function Add() {
    const { data } = useSelector(state => state.item)
    const dispatch = useDispatch()
    // const [data, setData] = useState({ name: '', age: '', mark: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch(updateData({name,value}))
        // setData((prev) => ({ ...prev, [name]: value }))
    }
    const submit = () => {
        dispatch(addData(data))
        dispatch(resetData())
        // setData({ name: '', age: '', mark: '' })
    }
    console.log(data);
    return (
        <div>
            <h1>Add Participends</h1>
            <div>
                <label>name</label>
                <input type='text' value={data.name} onChange={handleChange} name='name'></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' value={data.age} onChange={handleChange} name='age'></input>
            </div>
            <div>
                <label>marks</label>
                <input type='text' value={data.mark}  onChange={handleChange} name='mark'></input>
            </div>
            <button onClick={submit}>Add</button>
        </div>
    )
}

export default Add