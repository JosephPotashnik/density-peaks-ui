import React from 'react';
import * as d3 from "d3";

const handleClick = (filename, onFileLoad) => {
  d3.csv(`/assets/datasets/${filename}.csv`)
    .then((data) => {
      onFileLoad(data); // Pass the full array of objects
    })
    .catch((error) => {
      console.error("Error loading CSV:", error);
    });
};

export function LoadDatasetButton({ text, onFileLoad }) {
  return (
    <button onClick={() => handleClick(text, onFileLoad)} >
      {text} 
    </button>
  );
}