// UploadImage Component (as provided, no changes needed unless styling adjustments)
import React, { useState } from 'react';
import CommonButton from '@common/CommonButton/CommonButton';

const UploadImage = ({ onClose, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleUpload = () => {
    console.log('Uploading file:', selectedFile);
    onClose();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Upload Media</h2>
      <input type="file" onChange={handleFileChange} />
      <CommonButton
        className="bg-cyan-800 text-white px-4 py-2 rounded-full mt-4 hover:bg-cyan-700"
        text="Upload"
        onClick={handleUpload}
      />
      <CommonButton
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full mt-2 hover:bg-gray-400"
        text="Close"
        onClick={onClose}
      />
    </div>
  );
};

export default UploadImage;
