import { LeftSideColumn } from '/src/components/LeftSideColumn.jsx'
import { RightSideColumn } from '/src/components/RightSideColumn.jsx'

import { MainColumn } from '/src/components/MainColumn.jsx'
import React, { useState } from "react";

export function Main() {

  const [fileData, setFileData] = useState(null); // State to store file data
  const [algorithmParams, setAlgorithmParams] = useState(
    {
      DensityPeaks: [
        { name: 'Cutoff Distance', value: '10' }
      ],
      KNN: [
        { name: 'K', value: 'Value A' },
        { name: 'Tuning Type', value: 'Fine' },
      ],
      MultiManifold:  [
        { name: 'K', value: '5' },
        { name: 'M', value: '10' },
        { name: 'Tuning Type', value: 'Fine' },
      ]
    }
  );

  const handleAlgorithmParamsLoad = (algorithmName, updatedParams) => {
    
    console.log("arrived at parent component");
    console.log(updatedParams);
    setAlgorithmParams((prevParams) =>
    ({
    ...prevParams,
    [algorithmName]: updatedParams
    }));
  };

  // Function to update file data when a file is loaded
  const handleFileLoad = (data) => {
    setFileData(data);
  };

    return (
      <>
      <div className='main'>
        <LeftSideColumn onFileLoad={handleFileLoad} />
        <MainColumn fileData={fileData} algorithmParams={algorithmParams} />
        <RightSideColumn algorithmParams={algorithmParams} onAlgorithmParamsLoad={handleAlgorithmParamsLoad} />
      </div>
      </>
    )
  }