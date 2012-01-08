
var map;
var heatmap; 


	var testData={
    		max: 2,
             data: [
             {lat: 43.59760763 , lng: 1.43077006, count: 2}, 
             {lat: 43.59901928 , lng: 1.43035278, count: 2}, 
             {lat: 43.60348259 , lng: 1.43610296, count: 2}, 
             {lat: 43.60155258 , lng: 1.43846487, count: 2}, 
             {lat: 43.60831709 , lng: 1.43715117, count: 2}, 
             {lat: 43.60812753 , lng: 1.42795549, count: 2}, 
             {lat: 43.61001131 , lng: 1.43323681, count: 2}, 
             {lat: 43.61165562 , lng: 1.43920999, count: 2}, 
             {lat: 43.61030641 , lng: 1.44351542, count: 2}, 
             {lat: 43.60872738 , lng: 1.45045488, count: 2}, 
             {lat: 43.60654851 , lng: 1.44756751, count: 2}, 
             {lat: 43.60602195 , lng: 1.44673584, count: 2}, 
             {lat: 43.60510353 , lng: 1.44788847, count: 2}, 
             {lat: 43.60533873 , lng: 1.44886839, count: 2}, 
             {lat: 43.6088769 , lng: 1.45363658, count: 2}, 
             {lat: 43.60655151 , lng: 1.45222039, count: 2}, 
             {lat: 43.6057887 , lng: 1.45223721, count: 2}, 
             {lat: 43.60320702 , lng: 1.45536591, count: 2}, 
             {lat: 43.60124053 , lng: 1.45215637, count: 2}, 
             {lat: 43.60274908 , lng: 1.44805647, count: 200}, 
             {lat: 43.60030092 , lng: 1.44390508, count: 2}, 
             {lat: 43.59726479 , lng: 1.44421005, count: 2}, 
             {lat: 43.59953693 , lng: 1.45459493, count: 2}, 
             {lat: 43.59646914 , lng: 1.45396848, count: 2}, 
             {lat: 43.594347 , lng: 1.45586165, count: 40}, 
             {lat: 43.59238296 , lng: 1.45126574, count: 2}, 
             {lat: 43.62690474 , lng: 1.43336912, count: 2}, 
             {lat: 43.56483074 , lng: 1.4101753, count: 2}, 
             {lat: 43.62028737 , lng: 1.43528614, count: 2}, 
             {lat: 43.61858847 , lng: 1.45655513, count: 2}, 
             {lat: 43.61947339 , lng: 1.46902286, count: 2}, 
             {lat: 43.60674995 , lng: 1.45982608, count: 2}, 
             {lat: 43.57927252 , lng: 1.48357725, count: 2}, 
             {lat: 43.57947622 , lng: 1.45918784, count: 2}, 
             {lat: 43.58104332 , lng: 1.44927686, count: 2}, 
             {lat: 43.57724923 , lng: 1.43991339, count: 2}, 
             {lat: 43.58477928 , lng: 1.4282637, count: 2}, 
             {lat: 43.57877133 , lng: 1.41178584, count: 2}, 
             {lat: 43.6126004 , lng: 1.44823107, count: 2}] 
    	};
    


window.onload = function(){

  var myLatlng = new google.maps.LatLng(43.60103,1.440754);
	// sorry - this demo is a beta
	// there is lots of work todo
	// but I don't have enough time for eg redrawing on dragrelease right now
	var myOptions = {
	  zoom: 12,
	  center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  disableDefaultUI: false,
	  scrollwheel: true,
	  draggable: true,
	  navigationControl: true,
	  mapTypeControl: false,
	  scaleControl: true,
	  disableDoubleClickZoom: false
	};
	map = new google.maps.Map(document.getElementById("heatmapArea"), myOptions);
	
	heatmap = new HeatmapOverlay(map, {"radius":15, "visible":true, "opacity":60});
	
	
	document.getElementById("tog").onclick = function(){
		heatmap.toggle();
	};
		
	// this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
	google.maps.event.addListenerOnce(map, "idle", function(){
		heatmap.setDataSet(testData);
  });

  google.maps.event.addListenerOnce(map, "onZoom", function(){
		//heatmap.setDataSet(testData);
	});

};
