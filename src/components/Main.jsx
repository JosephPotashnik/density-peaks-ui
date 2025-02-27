import { LeftSideColumn } from '/src/components/LeftSideColumn.jsx'
import { MainColumn } from '/src/components/MainColumn.jsx'
import React, { useState } from "react";

export function Main() {

  const [fileData, setFileData] = useState(null); // State to store file data

  // Function to update file data when a file is loaded
  const handleFileLoad = (data) => {
    setFileData(data);
  };

    return (
      <>
      <div className='main'>
        <LeftSideColumn onFileLoad={handleFileLoad} />
        <MainColumn fileData={fileData} />
        </div>
      </>
    )
  }