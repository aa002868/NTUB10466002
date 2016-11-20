function YiFanWang(){

dataPath = 'https://aa002868.github.io/NTUB10466002/';
	dataFile = 'YiFanWang.csv';
	dataUrl = dataPath + dataFile;
	d3.csv("dataUrl", function(data) {
	      d3.wordcloud()
        .size([800, 400])
        .selector('#line')
        .words(data)
        .start();
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
