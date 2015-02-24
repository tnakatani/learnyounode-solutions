/*
|----------------------------------------------------------------------
|  Lesson 13
|----------------------------------------------------------------------
 */

// URL Response - console.log(url.parse(req.url, true));
// { protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?iso=2015-01-27T12:23:14.613Z',
//   query: { iso: '2015-01-27T12:23:14.613Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2015-01-27T12:23:14.613Z',
//   href: '/api/parsetime?iso=2015-01-27T12:23:14.613Z' }

var http = require('http');
var url = require('url');

function parseTime(time) {
	return {
		'hour'   : time.getHours(),
		'minute' : time.getMinutes(),
		'second' : time.getSeconds()
	};
}
function parseUtc(time) {
	return {
		'unixtime': time.getTime()
	};
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var urlPath = parsedUrl.pathname;
	var time = new Date(parsedUrl.query.iso);
	var body;

	if (urlPath === '/api/parsetime') {
		body = JSON.stringify(parseTime(time));
	}
	if (urlPath === '/api/unixtime') {
		body = JSON.stringify(parseUtc(time));
	}

	if (body) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(body);
	} else {
		res.writeHead(404);
		res.write('sorry boutcha');
	}

	res.end();
});

server.listen(process.argv[2]);

/*
|----------------------------------------------------------------------
|  Official Solution
|----------------------------------------------------------------------
 */

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
// 	hour: time.getHours(),
// 	minute: time.getMinutes(),
// 	second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
// 	result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
// 	result = unixtime(time)

//   if (result) {
// 	res.writeHead(200, { 'Content-Type': 'application/json' })
// 	res.end(JSON.stringify(result))
//   } else {
// 	res.writeHead(404)
// 	res.end()
//   }
// })
// server.listen(Number(process.argv[2]))