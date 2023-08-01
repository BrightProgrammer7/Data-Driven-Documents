console.log(d3);

// numbers d3
d3.select(".numbers")
  .selectAll("p")
  .data([1, 2, 3])
  .enter()
  .append("p")
  .text((dta) => dta);

const dummy_data = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 20, region: "Russia" },
  { id: "d3", value: 30, region: "China" },
  { id: "d4", value: 40, region: "Morocco" },
];

// numbers region
const container = d3
  .select(".verse-chart")
  .style("border", "1px solid red")
  .classed("container", true);

const bars = container
  .selectAll(".bar")
  .data(dummy_data)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", "50px")
  .style("height", (data) => data.value + "px");

// chart d3
const xScale = d3
  .scaleBand()
  .domain(dummy_data.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);

const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const component = d3.select(".rectangle").classed("component", true);

const rect = component
  .selectAll(".rect")
  .data(dummy_data)
  .enter()
  .append("rect")
  .classed("chart", true)
  .attr("width", xScale.bandwidth())
  .style("height", (data) => 200 - yScale(data.value))
  .attr("x", (data) => xScale(data.region))
  .attr("y", (data) => yScale(data.value));

// circle d3
const circle = d3.select(".circle");
circle
  .append("circle")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", 20)
  .style("fill", "green");

// select all the shapes with for loop
// for (const point of data) {
//     svg.append('circle')
// }

// rides d3
const rides = [
  { name: "🐂", speed: 23 },
  { name: "🐫", speed: 42 },
  { name: "🐘", speed: 11 },
  { name: "🐎", speed: 99 },
];

// const span = d3.select("span");
// const span = d3.selectAll("span").data(rides).enter().update().exit();

// const xScale = d3.scaleBand().range().domain();

// const yScale = d3
//   .select("graph")
//   .transition()
//   .duration(2000)
//   .attr("width", "400");

const toolTips = d3
  .select("rect")
  .on("mouseover", () => showToolTip)
  .on("click", () => redrawChart());

const randomColor = "blue";
const coloredParagraphs = d3.selectAll("p").style("color", () => randomColor);
