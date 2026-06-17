console.log(d3)

commit1 = {
    "date": 1,
    "time": "01:15",
    "parents": [1],
    "commit": 1 
};

commit2 = {
    "date": 2,
    "time": "01:15",
    "parents": [1],
    "commit": 1 
};

const commits = [
    commit1, 
    commit2
];

d3.select("#graphVisualiser").selectAll("p")
.data(commits)
.enter()
.append("p")
.text(data => data.time);

const container = d3.select("#graphVisualiser")
.classed("container", true);

const bars = container.selectAll(".bar").data(commits).enter()
.append("rect").classed("bar", true)
.attr("width", 50 + "px")
.attr("height", data => (data.date * 15) + "px");