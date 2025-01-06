import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';


const AddEmployeeComponent: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>{id ? `Update Employee with ID: ${id}` : 'Add New Employee'}</h2>
    </div>
  );
};

export default AddEmployeeComponent;
