var Database = {
	keyName: "Mutant Database",
	data: []
};


function loadDataSource() {
	var localData = localStorage.getItem(Database.keyName);
	var parsedData = JSON.parse( localData);
	Database.data = pasedData;
	displayData( Database.data );
}



function displayData(dataArray) {
console.log(dataArray.response);
var root = dataArray.response;
	root.forEach(function(value, index){
		var html = '//add the  card layout here';
	
	document.querySelector(".col").innerHTML += html;
});

loadDataSource();
