import { AlgorithmCard } from '/src/components/AlgorithmCard.jsx'

export function RightSideColumn({algorithmParams, onAlgorithmParamsLoad, onAlgorithmToRun}) {
  
    return (
      <div className="rightSideColumn"> 
        <h3>Algorithms</h3>
        <AlgorithmCard algorithmName="DensityPeaks" algorithmParams={algorithmParams.DensityPeaks} onAlgorithmParamsLoad= {onAlgorithmParamsLoad} onAlgorithmToRun={onAlgorithmToRun}/>
        <AlgorithmCard algorithmName="KNN" algorithmParams={algorithmParams.KNN} onAlgorithmParamsLoad = {onAlgorithmParamsLoad} onAlgorithmToRun={onAlgorithmToRun}/>
        <AlgorithmCard algorithmName="MultiManifold" algorithmParams={algorithmParams.MultiManifold} onAlgorithmParamsLoad = {onAlgorithmParamsLoad} onAlgorithmToRun={onAlgorithmToRun}/>
      </div>
    )
  }