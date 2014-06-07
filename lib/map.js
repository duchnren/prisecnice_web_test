// Maps always need a projection, but the static image is not geo-referenced,
// and are only measured in pixels.  So, we create a fake projection that the
// map can use to properly display the layer.
var pixelProjection = new ol.proj.Projection({
  code: 'pixel',
  units: 'pixels',
  extent: [0, 0, 3052, 2379]
});

var map = new ol.Map({
  layers: [
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../../img/prisecnice_mapa.png',
        imageSize: [3052, 2379],
        projection: pixelProjection,
        imageExtent: pixelProjection.getExtent()
      })
    })
  ],
  target: 'map',
  view: new ol.View2D({
    projection: pixelProjection,
//    center: ol.extent.getCenter(pixelProjection.getExtent()),
    center: [1400, 1200],
    zoom: 3
  })
});
