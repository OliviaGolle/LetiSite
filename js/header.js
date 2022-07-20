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

	var header = $('.header');
	var hamburgerBar = $('.hamburger_bar');
	var hamburger = $('.hamburger');
	var map;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initLeafletMap();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
			hamburgerBar.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			hamburgerBar.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			hamburger.on('click', function()
			{
				hamburger.toggleClass('active');
				menu.toggleClass('active');
			});
		}
	}

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