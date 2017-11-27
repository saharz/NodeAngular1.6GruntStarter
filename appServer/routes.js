module.exports = function(app) {
    var http = require('http'),
		xml2js = require('xml2js'),
		parser = new xml2js.Parser();

    // server routes ===========================================================
	// handle api calls
	// frontend routes =========================================================
	app.get('/', function(req, res) {
		res.sendfile('./build/index.html');
	});

    app.get('/flickrs', function(req, res) {
    	console.log("/flickrs");
        http.get('http://api.flickr.com/services/feeds/photos_public.gne', function(resXml){
            var response_data = '';
            resXml.setEncoding('utf8');
            resXml.on('data', function(chunk) {
                response_data += chunk;
            });
            resXml.on('end', function() {
                parser.parseString(response_data, function(err, result) {
                    if (err) {
                        console.log('Got error: ' + err.message);
                    } else {
                        res.send(JSON.stringify(result));
                    }
                });
            });
            resXml.on('error', function(err) {
                console.log('Got error: ' + err.message);
            });
		});
    });

    app.get('/authorFlickr', function(req, res) {
        console.log("/authorFlickr: " + req.query.id);
        http.get('http://api.flickr.com/services/feeds/photos_public.gne?id=' + req.query.id, function(resXml){
            var response_data = '';
            resXml.setEncoding('utf8');
            resXml.on('data', function(chunk) {
                response_data += chunk;
            });
            resXml.on('end', function() {
                parser.parseString(response_data, function(err, result) {
                    if (err) {
                        console.log('Got error: ' + err.message);
                    } else {
                        res.send(JSON.stringify(result));
                    }
                });
            });
            resXml.on('error', function(err) {
                console.log('Got error: ' + err.message);
            });
        });
    });
};