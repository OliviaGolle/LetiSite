/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initLeafletMap();


	/* 

	4. Init Leaflet Map

	*/

	function initLeafletMap()
	{
		var mymap = L.map(document.getElementById('map'), {
			center:[47.227036, -1.601413],
			zoom: 13
		});
		
		var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMp</a> contributors'
		});
		
		basemap.addTo(mymap);
				
		var marker = L.marker([47.227036, -1.601413])
		
		marker.addTo(mymap);
				
	}


});