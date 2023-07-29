const svg = d3.select("svg");

// from jquery import $
// const svg = $('svg')

const div = d3.select("div").selectAll('p').data([1,2,3]).enter().append

const coloredParagraphs = d3.selectAll("p").style("color", () => randomColor);

svg
  .append("circle")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", 20)
  .style("fill", "green");

// select all the shapes with for loop
// for (const point of data) {
//     svg.append('circle')
// }

const rides = [
  { name: "🐫", speed: 23 },
  { name: "🐘", speed: 11 },
  { name: "🐎", speed: 42 },
  { name: "🐂", speed: 99 },
];

svg.selectAll().data(rides).enter().update().exit();

const xScale = d3.scaleBand().range().domain();

const yScale = d3
  .select("rect")
  .transition()
  .duration(2000)
  .attr("width", "400");

const toolTips = d3
  .select("rect")
  .on("mouseover", () => showToolTip)
  .on("click", () => redrawChart());
