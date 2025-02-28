
const handleClick = (algorithmParams, onAlgorithmParamsLoad) => {
  console.log("handle click");
  onAlgorithmParamsLoad(algorithmParams);
};

export function ClusterizeButton({algorithmParams, onAlgorithmParamsLoad}) {
  return (
    <button onClick= {()=> handleClick(algorithmParams, onAlgorithmParamsLoad)}>
      Run!
    </button>
  );
}