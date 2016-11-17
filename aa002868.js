function aa002868(){
var width  = 460;
var height = 227; 
dataPath = 'https://github.com/aa002868/NTUB10466002/blob/master/';
	dataFile = 'table.csv';
	dataUrl = dataPath + dataFile;
d3.csv("dataUrl", function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
		console.log(d.Low);
		console.log(d.Close);
	});
	var maxy = d3.max(data, function(d) { return d.Open; });
	var hmaxy = d3.max(data, function(d) { return d.High; });
	var lmaxy = d3.max(data, function(d) { return d.Low; });
	var cmaxy = d3.max(data, function(d) { return d.Close; });
	var ln = data.length;
	var ctrl  = d3.select(".newsletter").append("svg").attr("width", width).attr("height", height);
	var lines = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Open * (height/hmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("d", lines);
	var line2 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.High * (height/hmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline2").
	attr("d", line2);
    	var line3 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Low * (height/hmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline3").
	attr("d", line3);
	var line4 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return height-d.Close * (height/hmaxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline4").
	attr("d", line4);
	
});
}
