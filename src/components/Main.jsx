import { LeftSideColumn } from '/src/components/LeftSideColumn.jsx'
import { RightSideColumn } from '/src/components/RightSideColumn.jsx'

import { MainColumn } from '/src/components/MainColumn.jsx'
import React, { useState } from "react";

export function Main() {

  const [fileData, setFileData] = useState(null); // State to store file data
  const [algorithmToRun, setAlgorithmToRun] = useState(null);
  const [renderVersion, setRenderVersion] = useState(0); // This is used to force re-renders
  const [algorithmParams, setAlgorithmParams] = useState(
    {
      DensityPeaks: [
        { name: 'Cutoff Distance', value: '10' }
      ],
      KNN: [
        { name: 'k', value: '10' },
        { name: 'Tuning Type', value: 'Fine' },
      ],
      MultiManifold:  [
        { name: 'k', value: '5' },
        { name: 'm', value: '10' },
        { name: 'Tuning Type', value: 'FineTuning' },
      ]
    }
  );

  const handleAlgorithmToRun = (algorithmName) => {
    console.log(`algorithmToRun: ${algorithmName}`);
    
    // Set the algorithm name as usual
    setAlgorithmToRun(algorithmName);
    setRenderVersion(prev => prev + 1); // Force re-render by updating version  

  };

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
        <MainColumn fileData={fileData} algorithmParams={algorithmParams} algorithmToRun={algorithmToRun} renderVersion={renderVersion}/>
        <RightSideColumn algorithmParams={algorithmParams} onAlgorithmParamsLoad={handleAlgorithmParamsLoad} onAlgorithmToRun={handleAlgorithmToRun}/>
      </div>
      </>
    )
  }