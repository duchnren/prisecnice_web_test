//////////////////////////////////////////////////////////
//OL3 - CREATE MAP LAYER, ADD TWO RASTER LAYERS - IMAGES//
//////////////////////////////////////////////////////////

var pixelProjection = new ol.proj.Projection({
  code: 'pixel',
  units: 'pixels',
  extent: [0, 0, 2944, 2944]
});

//var mousePositionControl = new ol.control.MousePosition({
//  coordinateFormat: ol.coordinate.createStringXY(2),
//  projection: pixelProjection,
////  className: 'custom-mouse-position',
////  target: document.getElementById('mouse-position'),
//  undefinedHTML: '&nbsp;'
//});

//var iconFeature;
//var vectorSource = new ol.source.Vector({
//  features: [iconFeature]
//});
//
//var vectorLayer = new ol.layer.Vector({
//  source: vectorSource
//});

var raster = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../../img/pris_raster1.png',
    imageSize: [2944, 2944],
    projection: pixelProjection,
    imageExtent: pixelProjection.getExtent()
  })
});

var photo = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../../img/pris_photo1.png',
    imageSize: [2944, 2944],
    projection: pixelProjection,
    imageExtent: pixelProjection.getExtent()
  })
});

//var vector = new ol.layer.Vector({
//  source: new ol.source.KML({
//    projection: pixelProjection,
//    url: '../buildings.kml'
//  })
//});
var view = new ol.View2D({
  projection: pixelProjection,
  center: [1580, 1830],
  zoom: 3,
  minZoom: 2,
  maxZoom: 6
});

var map = new ol.Map({
//  controls: ol.control.defaults().extend([mousePositionControl]),
  layers: [photo, raster],
  target: 'map',
  view: view
});

//////////////////////////////////////
//OL3 - CREATE OVERLAP OF TWO LAYERS//
//////////////////////////////////////

var swipe = document.getElementById('swipe');

raster.on('precompose', function(event) {
  var ctx = event.context;
  var width = ctx.canvas.width * (swipe.value / 100);

  ctx.save();
  ctx.beginPath();
  ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
  ctx.clip();
});

raster.on('postcompose', function(event) {
  var ctx = event.context;
  ctx.restore();
});

swipe.addEventListener('input', function() {
  map.render();
}, false);

//////////////////////////////////
//OTHERS - PROCESSING HTML5&CSS3//
//////////////////////////////////

var obj = JSON.parse(budovy);
var cooSel;

//marker
var icon = new ol.style.Style({
  image: new ol.style.Icon({
    src: '../img/townhouse.png'
  })
});


//Add option into select #coo
for (var i = 1; i<=7; i++) {
  $('#coo').append($('<option>', {
    value: i,
    text: obj.dum[i-1].cp
  }));
}

//Select item for display model
$('#coo').on('change', function() {
  cooSel = $('#coo').val();

  if (cooSel=="br") {
//    map.setCenter(puvPoz, 2);
//    vectorLayer.removeAllFeatures();
    $('#obsah-model').hide();
  }
  else {
    var sour = obj.dum[cooSel-1].souradnice;
    var xyi = sour.split(",").map(Number);
    var x = xyi[0];
    var y = xyi[1];

//    iconFeature = new ol.Feature({
//      geometry: new ol.geom.Point([x,y])
//    });
//
//    iconFeature.setStyle(icon);
    view.setCenter([x, y]);
    view.setZoom(4);



//    vectorLayer.removeAllFeatures();

//    var poz = new OpenLayers.LonLat(x,y);
//    var dd2 = new OpenLayers.Geometry.LinearRing(vectorDum[i]);
//    polygonFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon([dd2]));
//    vectorLayer.addFeatures([polygonFeature]);
//    map.setCenter(poz, 4);

//    $('#obsah-popis').show();
//    $('#obsah-popis').html(
//      '<h3 class="nazev">' + obj.dum[cooSel-1].nazev + '</h3></br>' +
//      '<p class="popis">' + obj.dum[cooSel-1].popis + '</p>');

    $('#obsah-model').show();

//    if (obj.dum[cooSel-1].popis==" ") {
//      $('#obsah-model').css({width: '100%', marginTop: '0'});
//    } else {
//      $('#obsah-model').css({width: '50%', marginTop: '72'});
//    }
    $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[cooSel-1].model + '"></iframe>');

    if ($('.mapsec').css('display')=="block") {
      $('.modelsec').css('width','50%');
    }
    else {
      $('.modelsec').css('width','100%');
    }
  }
});

//Button for default view
$('.but').click(function() {
  view.setCenter([1580, 1830]);
//  vectorLayer.removeAllFeatures();
  $('#coo').val("br");
  $('.mapsec').show();
  $('.but2').html("Skrýt mapu");
  $('#obsah-model').hide();
  $('#obsah-popis').hide();
});

//Button for hide and show map
$('.but2').click(function() {
  if ($('.mapsec').css('display')=="block") {
    $('.mapsec').hide();
    $('.but2').html("Zobrazit mapu");
    $('.modelsec').css('width','100%');
  }
  else  { //if ($('.mapsec').css('display')=="none")
    $('.mapsec').show();
    $('.but2').html("Skrýt mapu");
    $('.modelsec').css('width','50%');
  }
});
