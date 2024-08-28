"use client"
import React, { useState } from 'react';
import { ReferenceForm, OtherForm } from '../UI/page';

const FormContainer: React.FC = () => {
  const [reference, setReference] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });

  const [references, setReferences] = useState([]);

  const [other, setOther] = useState({
    name: '',
    city: '',
    startDate: null,
    endDate: null,
    description: ''
  });

  const [others, setOthers] = useState([]);

  const handleReferenceChange = (field: string, value: string) => {
    setReference({ ...reference, [field]: value });
  };

  const handleOtherChange = (field: string, value: string | Date | null) => {
    setOther({ ...other, [field]: value });
  };

  const handleAddReference = () => {
    setReferences([...references, reference]);
    setReference({ name: '', company: '', phone: '', email: '' }); 
  };

  const handleAddOther = () => {
    setOthers([...others, other]);
    setOther({ name: '', city: '', startDate: null, endDate: null, description: '' }); 
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <ReferenceForm reference={reference}  onChange={handleReferenceChange} onAdd={handleAddReference} />
      <ul className="list-disc pl-5 mb-4">
        {references.map((ref, index) => (
          <li key={index}>
            {ref.name} - {ref.company} - {ref.phone} - {ref.email}
          </li>
        ))}
      </ul>

      <OtherForm other={other}  onChange={handleOtherChange} onAdd={handleAddOther}
      />
      <ul className="list-disc pl-5">
        {others.map((oth, index) => (
          <li key={index}>
            {oth.name} - {oth.city} - {oth.startDate?.toLocaleDateString()} to {oth.endDate?.toLocaleDateString()} - {oth.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormContainer;
