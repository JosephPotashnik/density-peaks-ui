import React, { useState } from 'react';
import { ClusterizeButton } from '/src/components/ClusterizeButton.jsx'

export function AlgorithmCard({ algorithmName, algorithmParams , onAlgorithmParamsLoad, onAlgorithmToRun}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  const handleInputChange = (index, event) => {
    console.log(`input change at ${algorithmName}`);
    const newParams = [...algorithmParams];
    newParams[index].value = event.target.value;

    onAlgorithmParamsLoad(algorithmName, newParams); 
  };

  return (
    <div className="card" style={styles.card}>
      <h3 onClick={toggleCard} style={styles.cardTitle}>
        {algorithmName} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <>
        <div style={styles.cardContent}>
          {algorithmParams.map((param, index) => (
           <p key={index} style={styles.param}>
           <strong>{param.name}: </strong>
           {param.name === "TuningType" ? (
             <select
               value={param.value}
               onChange={(e) => handleInputChange(index, e)}
               style={styles.input}
             >
               <option value="FineTuning">FineTuning</option>
               <option value="CoarseTuning">CoarseTuning</option>
             </select>
           ) : (
             <input
               type="number"
               value={param.value}
               onChange={(e) => handleInputChange(index, e)}
               style={styles.input}
             />
           )}
         </p>
          ))}
        </div>
        <ClusterizeButton algorithmName={algorithmName} onAlgorithmToRun = {onAlgorithmToRun}/>
        </>

      )}
      
    </div>
  );
};

// Simple inline styles
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    card: {
      width: '200px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    cardContent: {
      marginTop: '10px',
    },
    param: {
      marginBottom: '5px',
      fontSize: '14px',
    },
  };