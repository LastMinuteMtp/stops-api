var express = require('express');
var rest = require('restler');
var soap = require('soap');
var url = 'http://193.239.192.237:8040/services/getStops?wsdl';
var parser = require('xml2json');
var args = {
  Mode : 'Geo',
  Key: 'kGjGDgCWCUijXyExmQVvQ',
  API: '1',
  Mode: 'Geo',
  Lat: '43.606029',
  Lng: '3.876907',
  Perimeter: '100'
};
soap.createClient(url, function(err, client) {
  client.getStops.getStops.getStops(args, function(err, result) {
    console.log(result.body);
  });

}, 'http://193.239.192.237:8040/services/getStops');

var app = express();

app.get('/', function (req, resp) {
  soap.createClient(url, function(err, client) {
    client.getStops.getStops.getStops(args, function(err, result) {
      var json = parser.toJson(result.body);
      resp.send(Object.keys(json));
    });
  }, 'http://193.239.192.237:8040/services/getStops');
});

var port = process.env.PORT || 9000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

