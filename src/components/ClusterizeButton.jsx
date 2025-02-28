
const handleClick = (algorithmParams, onAlgorithmParamsLoad) => {
  console.log("handle click");
  onAlgorithmParamsLoad(algorithmParams);
};

export function ClusterizeButton({algorithmName, onAlgorithmToRun}) {
  return (
    <button onClick= {()=> handleClick(algorithmName, onAlgorithmToRun)}>
      Run!
    </button>
  );
}