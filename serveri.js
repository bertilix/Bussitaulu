// Simppeli serveri
// From: http://www.hongkiat.com/blog/node-js-server-side-javascript/

var ITSfetchURL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity/?lineRef=21,33,12'
var busdataFilename = 'bus_data.json';

var sys = require("sys"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");

my_http.createServer( function(request,response){
	var my_path = url.parse(request.url).pathname;
	console.log('Get: ',my_path);
	
	// Routing
	if (my_path === '/') { 
		my_path = 'index.html';
	}
	
	if (my_path === '/fetch_buses') {
		//console.log('/fetch_buses started')
		response.writeHeader(200, {"Content-Type": "text/plain"});  
		response.write("Now fetching bus data...\n"); 

		fetch_bus_data(ITSfetchURL);

		response.write("Bus data fetch started.\n"); 
		//console.log('/fetch_buses ending.');
		response.end();
		return;
	}
	
	if (my_path === '/get_buses') {
		//console.log('/get_buses started')
		//First trigger fetching new bus data, will arrive asynchronously
		//console.log('/get_buses triggering fetch_bus_data')
		fetch_bus_data(ITSfetchURL);
		//Meanwhile, serve the most recent bus data.
		//if bus_data.json exists... 
		var busdata_path = path.join(process.cwd(),busdataFilename);
		if (path.existsSync(busdata_path)) {  //This check is blocking :-(
			//Now the bus data will contain the latest update, 
			//or could be leftover from previous session.
			//Serve it anyway.
			//console.log('/get_buses serving most recent bus data from:',busdata_path);
			serveBinaryFile (busdataFilename,response);
			return;
		} else {
			//So the file does not exist, wait for the next round
			//and meanwhile serve an empty file
			console.log('/get_buses serving empty file, since bus data file not found:',busdata_path);
			response.writeHeader(200, {"Content-Type": "text/plain"});  
			response.end();  			
		}
		
		//console.log('/get_buses ending');
		//response.end();   //Should have been done already? 
		return;
	}
	
	// None of the fixed routes, so serve files	
	serveBinaryFile (my_path,response);
	
}).listen(8080);



function fetch_bus_data (URLtoFetch) {
		
		my_http.get( URLtoFetch, function(res) {
			//console.log("http.get Got res.statusCode: " + res.statusCode);
			//console.log("http.get res.headers:" + JSON.stringify(res.headers));
			res.setEncoding('utf8');
			var result = '';
			res.on('data', function(chunk) {
				//console.log('res got data event, len:',chunk.length);
				result += chunk;
			});
			res.on('end', function() {
				//console.log('res got end event, result len:',result.length);
				write_result_to_file('bus_data.json', result);
			});
		}).on('error', function(e) {
			console.log("http.get Got error: " + e.message);
		});
}


function serveBinaryFile (my_path,response) {
	var full_path = path.join(process.cwd(),my_path);
	//console.log('serveBinaryFile: looking for file',full_path);
	filesys.exists(full_path, function(exists){
		if (!exists){
			response.writeHeader(404, {"Content-Type": "text/plain"});  
			response.write("404 Not Found\n");  
			response.end();
		} else {
			filesys.readFile(full_path, "binary", function(err, data) {  
			     if (err) {  
			         response.writeHeader(500, {"Content-Type": "text/plain"});  
			         response.write(err + "\n");  
			         response.end();  			   
			     }  
				 else {
					//console.log('Serving response file, len:',data.length);
					response.writeHeader(200, {
						'Access-Control-Allow-Origin': '*'
						});
			        response.write(data, "binary");  
			        response.end();
				}	 
			});
		}
	});

}

function write_result_to_file(filename, result) {
	filesys.writeFile(filename,result, function(err) {
		if(err) {
			console.log(err);
		} else {
			//console.log('Wrote file:',filename);
		}	
	});

}

sys.puts("Server Running on http://localhost:8080/");			
