import { AlgorithmCard } from '/src/components/AlgorithmCard.jsx'

export function RightSideColumn({algorithmParams, onAlgorithmParamsLoad}) {
  
    return (
      <div className="rightSideColumn"> 
        <h3>Algorithms</h3>
        <AlgorithmCard algorithmName="DensityPeaks" algorithmParams={algorithmParams.DensityPeaks} onAlgorithmParamsLoad= {onAlgorithmParamsLoad}/>
        <AlgorithmCard algorithmName="KNN" algorithmParams={algorithmParams.KNN} onAlgorithmParamsLoad = {onAlgorithmParamsLoad}/>
        <AlgorithmCard algorithmName="MultiManifold" algorithmParams={algorithmParams.MultiManifold} onAlgorithmParamsLoad = {onAlgorithmParamsLoad}/>
      </div>
    )
  }