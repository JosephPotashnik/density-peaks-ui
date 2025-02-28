import {LoadDatasetButton} from '/src/components/LoadDatasetButton.jsx'

export function LeftSideColumn({ onFileLoad }) {

    return (
      <div className="leftSideColumn"> 
        <h3>Datasets</h3>
        <LoadDatasetButton text="flame" onFileLoad={onFileLoad}/>
        <LoadDatasetButton text="Jain" onFileLoad={onFileLoad}/>
        <LoadDatasetButton text="pathBased" onFileLoad={onFileLoad}/>
        <LoadDatasetButton text="spiral" onFileLoad={onFileLoad} />
        <LoadDatasetButton text="zahn" onFileLoad={onFileLoad}/>
        <LoadDatasetButton text="chameleon" onFileLoad={onFileLoad} />
        <LoadDatasetButton text="s1" onFileLoad={onFileLoad}/>
      </div>
    )
  }