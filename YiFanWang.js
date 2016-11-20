function YiFanWang(){
<script src="d3.js"></script>
<script src="d3.layout.cloud.js"></script>
<script src="d3.wordcloud.js"></script>
var width  = 460;
var height = 227; 
dataPath = 'https://aa002868.github.io/NTUB10466002/';
	dataFile = 'YiFanWang.csv';
	dataUrl = dataPath + dataFile;
	
	d3.csv("dataUrl", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#wordcloud')
        .words(data)
        .start();
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}