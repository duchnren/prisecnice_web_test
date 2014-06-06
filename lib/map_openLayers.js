//Script for loading image-map

var mapProjection = new ol.proj.Projection({
  code: 'pixel',
  units: 'pixels',
  extent: [0, 0, 2379, 3052]
});

var map = new ol.Map({
  layers: [
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../img/prisecnice_mapa.png',
        imageSize: [2379, 3052],
        projection: mapProjection,
        imageExtent: mapProjection.getExtent()
      })
    })
  ],
  target: 'map',
  view: new ol.View2D({
    projection: mapProjection,
    center: ol.extent.getCenter(mapProjection.getExtent()),
    zoom: 4
  })
});
