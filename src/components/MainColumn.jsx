import React, { useEffect } from "react";
import * as d3 from "d3";


export function MainColumn({ fileData, algorithmParams , algorithmToRun, renderVersion}) {
  useEffect(() => {
    if (fileData) {
      handleFileDataChange(fileData);
    }
  }, [fileData]); // Runs when fileData changes

  const colors = [
    '#808080',  // (Gray)
    '#7D9600', //(Olive Green)
    '#2D0B38', //(Deep Purple)
    '#3C2315',//(Rich Espresso)
    '#CC9900', //(Goldenrod)
    '#4A1D07', //(Dark Brown)
    '#8C3610', //(Burnt Orange)
    '#C73E1D', //(Deep Red-Orange)
    '#D91E3D', //(Crimson)
    '#7E0726', //(Dark Raspberry)

    '#5C2F8E', //(Royal Purple)
    '#17307F', //(Deep Navy Blue)
    '#0056A6', //(Strong Blue)
    '#00768A', //(Teal)
    '#145C3D', //(Forest Green)
    '#338C1F', //(Vibrant Green)

    '#E66400', //(Bright Orange)
    '#AA2266', //(Deep Magenta)
    '#782E4B', //(Muted Burgundy)
    '#AF3325', //(Brick Red)
    '#5A4B35', //(Warm Taupe)
  ];

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
    let data = d3.select('#scatterplot').selectAll('circle').data();
    var samples = [];
    for (let i = 0; i < data.length; i++)
        samples[i] = [data[i].x, data[i].y];

    const bodyData = 
    {
      Samples: samples,
    };
    
    algorithmParams[algorithmName].forEach(param => {
      bodyData[param.name] = param.value; 
    });
    
    console.log(bodyData);
    try 
    {
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(url+algorithmName, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyData) 
      });

      const data = await response.json();
      console.log(data);

      d3.select('#scatterplot').selectAll("circle").each(function(d, i) {
      // 'i' corresponds to the index of each circle, which can be used to access the clusters array
      d3.select(this).style("fill", colors[data[i]]);  // Set fill color based on clusters array
      });
     
  }
  catch (error) {
    console.error('Error:', error);
  }
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