const svg = d3.select("svg");

// from jquery import $
// const svg = $('svg')

d3.selectAll("p").style("color", () => randomColor);

svg
  .append("circle")
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("r", 20)
  .style("fill", "green");


for (const point of data) {
    app
}