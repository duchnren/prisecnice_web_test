var pixelProjection = new ol.proj.Projection({
  code: 'pixel',
  units: 'pixels',
  extent: [0, 0, 2379, 3052]
});

var mousePositionControl = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(2),
  projection: pixelProjection,
//  className: 'custom-mouse-position',
//  target: document.getElementById('mouse-position'),
  undefinedHTML: '&nbsp;'
});

var raster = new ol.layer.Image({
  source: new ol.source.ImageStatic({
    url: '../../img/prisecnice_mapa.png',
    imageSize: [2379, 3052],
    projection: pixelProjection,
    imageExtent: pixelProjection.getExtent()
  })
});

var vector = new ol.layer.Vector({
  source: new ol.source.KML({
    projection: pixelProjection,
    url: '../buildings.kml'
  })
});

var map = new ol.Map({
  controls: ol.control.defaults().extend([mousePositionControl]),
  layers: [raster, vector],
  target: 'map',
  view: new ol.View2D({
    projection: pixelProjection,
//    center: ol.extent.getCenter(pixelProjection.getExtent()),
    center: [1190, 1900],
    zoom: 3,
    minZoom: 2,
    maxZoom: 6
  })
});

var bouble = document.getElementById('popup');

var popup = new ol.Overlay({
  element: bouble,
  positioning: 'bottom-center',
  stopEvent: false
});
map.addOverlay(popup);



//var cp1 = new ol.Overlay({
//  position: [1385, 2050],
//  element: document.getElementById('cp1'),
////  stopEvent = true
//});
//map.addOverlay(cp1);
//
//var cp3 = new ol.Overlay({
//  position: [1269, 1690],
//  element: document.getElementById('cp3'),
////  stopEvent = true
//});
//map.addOverlay(cp3);
//
//map.on('click', function(evt) {
//  stopEvent = true
//});
