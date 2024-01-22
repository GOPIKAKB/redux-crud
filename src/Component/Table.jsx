import React from 'react'
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editData } from '../redux/itemSlice'

function Tables() {
  const dispatch = useDispatch()
  const { studentData } = useSelector(state => state.item)
  const handleDelete = (i) => {
    dispatch(deleteItem(i));
  }
  const handleUpdate = (i) => {
dispatch(editData(i))
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item?.name}</td>
            <td>{item?.age}</td>
            <td>{item?.mark}</td>
            <td onClick={() => handleUpdate( item)}><CiEdit /></td>
            <td onClick={() => handleDelete(index)}><MdDelete /></td>
            <td ><GrFormView /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tables