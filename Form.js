import React, { useState } from 'react';

const MyForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    // Add more fields as needed
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
    // Add even more fields as needed
  });

  // Generic onChange event handler
  const handleChange = (fieldName) => (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <form>
      <input
        type="text"
        value={formData.field1}
        onChange={handleChange('field1')}
        placeholder="Field 1"
      />

      <input
        type="text"
        value={formData.field2}
        onChange={handleChange('field2')}
        placeholder="Field 2"
      />

      <input
        type="text"
        value={formData.field3}
        onChange={handleChange('field3')}
        placeholder="Field 3"
      />

      <input
        type="text"
        value={formData.field4}
        onChange={handleChange('field4')}
        placeholder="Field 4"
      />

      <input
        type="text"
        value={formData.field5}
        onChange={handleChange('field5')}
        placeholder="Field 5"
      />

      {/* Continue adding more input fields as needed */}
      
      <input
        type="text"
        value={formData.field6}
        onChange={handleChange('field6')}
        placeholder="Field 6"
      />

      <input
        type="text"
        value={formData.field7}
        onChange={handleChange('field7')}
        placeholder="Field 7"
      />

      <input
        type="text"
        value={formData.field8}
        onChange={handleChange('field8')}
        placeholder="Field 8"
      />

      <input
        type="text"
        value={formData.field9}
        onChange={handleChange('field9')}
        placeholder="Field 9"
      />

      <input
        type="text"
        value={formData.field10}
        onChange={handleChange('field10')}
        placeholder="Field 10"
      />

      {/* Add even more input fields as needed */}
    </form>
  );
};

export default MyForm;
