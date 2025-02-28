import React, { useEffect } from "react";
import * as d3 from "d3";

export function MainColumn({ fileData, algorithmParams , algorithmToRun, renderVersion}) {
  useEffect(() => {
    if (fileData) {
      handleFileDataChange(fileData);
    }
  }, [fileData]); // Runs when fileData changes

  useEffect(() => {
    async function callBackend() {
    if (algorithmToRun) {
      let res = await clusterize(algorithmToRun, algorithmParams);
    }
  }
  callBackend();
  }, [algorithmToRun, renderVersion]); 

  const clusterize = async (algorithmName, algorithmParams) => 
  {

    console.log(`I am about to cluster ${algorithmName} with the params ${JSON.stringify(algorithmParams[algorithmName])}`);

  let data = d3.select('#scatterplot').selectAll('circle').data();
  var samples = [];
  for (let i = 0; i < data.length; i++)
      samples[i] = [data[i].x, data[i].y];

    const bodyData = 
    {
      matrix: samples,
      k : algorithmParams[algorithmName].find(param => param.name === "K").value
    };

    try {
      const response = await fetch('http://localhost:5072/KNN', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( bodyData) 
      });

      const data = await response.json();
     
  }
  catch (error)
  {
    console.log("error");
  };
}

  const handleFileDataChange = (data) => {
    
    // Set dimensions and margins for the graph
const margin = {top: 20, right: 30, bottom: 40, left: 140},
width = 500 ,
height = 400 ;

d3.select('#scatterplot').selectAll('*').remove();

// Append SVG to the scatterplot div
const svg = d3.select("#scatterplot")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Convert the x and y fields to numbers
data.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
});

// Create scales for X and Y axis
const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)]) // Domain is from 0 to max value in x
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)]) // Domain is from 0 to max value in y
    .range([height, 0]);

// Add dots (the scatterplot points)
svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", d => xScale(d.x))   // X position
    .attr("cy", d => yScale(d.y))   // Y position
    .attr("r", 3)                   // Radius of the point*/
    .style("fill", "steelblue");    // Color of the point*/

  };


    return (
      <div className="mainColumn">
        <h3>Graph</h3>
        <div id="scatterplot"> </div>
      </div>
    )
  }