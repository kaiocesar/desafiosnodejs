function start() {
	console.log('Request handler start was called');

	return "Hello start";
}

function upload() {
	console.log("Request handler 'upload' was called");
	return "Helo upload";
}


exports.start = start;
exports.upload = upload;


