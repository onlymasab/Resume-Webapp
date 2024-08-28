"use client";
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Reference {
  name: string;
  company: string;
  phone: string;
  email: string;
}

interface Other {
  name: string;
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}

interface ReferenceFormProps {
  reference: Reference;
  onChange: (field: string, value: string | Date | null) => void;
  onAdd: () => void;
}

interface OtherFormProps {
  other: Other;
  onChange: (field: string, value: string | Date | null) => void;
  onAdd: () => void;
}

export const ReferenceForm: React.FC<ReferenceFormProps> = ({ reference, onChange, onAdd }) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold mb-2">References</h2>
    <p className='text-sm'>Your reference could be Professors, co-workers, recent employes or freinds</p><br/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" value={reference.name} placeholder="Name" onChange={(e) => onChange('name', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full"  />
      <input type="text" value={reference.company} placeholder="Company" onChange={(e) => onChange('company', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
      <input type="text" value={reference.phone} placeholder="Phone" onChange={(e) => onChange('phone', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
      <input type="email" value={reference.email} placeholder="Email" onChange={(e) => onChange('email', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
    </div>
    <button onClick={onAdd} className="text-blue-500 mt-2">+ Add reference</button>
  </div>
);

export const OtherForm: React.FC<OtherFormProps> = ({ other, onChange, onAdd }) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold mb-2">Other</h2>
    <p className='text-sm'>You can include awards, honors ,volunteer work, certificate, liscense orpersonal projects.</p><br/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" value={other.name} placeholder="Name" onChange={(e) => onChange('name', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
      <input type="text" value={other.city} placeholder="City" onChange={(e) => onChange('city', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
      <DatePicker selected={other.startDate} onChange={(date) => onChange('startDate', date)} placeholderText="Start Date" className="border border-gray-300 rounded-md p-2 w-full" />
      <DatePicker selected={other.endDate} onChange={(date) => onChange('endDate', date)} placeholderText="End Date" className="border border-gray-300 rounded-md p-2 w-full"/>
    </div>
    <textarea value={other.description} placeholder="Description" onChange={(e) => onChange('description', e.target.value)} className="border border-gray-300 rounded-md p-2 w-full mt-4" />
    <button onClick={onAdd} className="text-blue-500 mt-2">+ Add Item</button>
  </div>
);
