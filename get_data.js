autowatch =1 ;

//var d = new Dict("sources");
var sources; // = dict_to_jsobj(d);
var data;
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
    	sources = JSON.parse(xhttp.responseText);
  	}
};
function url(u) {
	post(u);

	xhttp.open("GET", u, false);
	xhttp.send();
	
}


/*function dictionary(){
	data = sources.body;
	data = JSON.parse(data);
	post(data.length);
}
	/*
	for(var i = 0; i < keys.length; i++){
		post(keys[i], "\n"); // This will post the key name
		post(d.get(keys[i]), "\n"); // This will post the value
	}

function dict_to_jsobj(dict) {
	if (dict == null) return null;
	var o = new Object();
	var keys = dict.getkeys();
	if (keys == null || keys.length == 0) return null;

	if (keys instanceof Array) {
		for (var i = 0; i < keys.length; i++)
		{
			var value = dict.get(keys[i]);
			
			if (value && value instanceof Dict) {
				value = dict_to_jsobj(value);
			}
			o[keys[i]] = value;
		}		
	} else {
		var value = dict.get(keys);
		
		if (value && value instanceof Dict) {
			value = dict_to_jsobj(value);
		}
		o[keys] = value;
	}

	return o;
}*/

function filter(f)
{
 	var numfields = 1;
    var numrecords = sources.length;
    //var fieldnames = Object.keys(sources);
 	var values = new Array(25);


	outlet(0, "clear", "all");
	outlet(0, "cols", numfields);
	outlet(0, "rows", 25);    

	outlet(0, "set", 0, 0, "SOURCES");
	
	
	for(var i=0,j=0; i<numrecords; i++){
		if(sources[i].source_type==f){
			outlet(0, "set", 0, j+1,sources[i].id +" "+ sources[i].name );
			j++;
			}
	}
}

function urlsearch(u)
{	
	var numrecords = sources.length;
	for(var i=0,j=0; i<numrecords; i++){
		if(sources[i].id==u){
			outlet(0, "url", sources[i].url );
		}
	}
}

function cc()
{
	
    var numfields = 1;
    var numrecords = sources.length;
    var fieldnames = Object.keys(sources[0]);
 	var values = new Array(25);


	outlet(0, "clear", "all");
	outlet(0, "cols", numfields);
	outlet(0, "rows", 25);    

	outlet(0, "set", 0, 0, "SOURCES");
	
	
	for(var i=0,j=0; i<numrecords; i++){
		if(sources[i].cc_free==true){
			outlet(0, "set", 0, j+1,sources[i].id +" "+ sources[i].name );
			j++;
			}
	}
}

