var pixelProjection = new ol.proj.Projection({
  code: 'pixel',
  units: 'pixels',
  extent: [0, 0, 2944, 2944]
});

//////////////////////////////////////////////////////////
//OL3 - CREATE MAP LAYER, ADD TWO RASTER LAYERS - IMAGES//
//////////////////////////////////////////////////////////

var mousePositionControl = new ol.control.MousePosition({
  coordinateFormat: ol.coordinate.createStringXY(2),
  projection: pixelProjection,
//  className: 'custom-mouse-position',
//  target: document.getElementById('mouse-position'),
  undefinedHTML: '&nbsp;'
});

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
    url: '../../img/pris_photo11.png',
    imageSize: [2944, 2944],
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

var view = new ol.View2D({
  projection: pixelProjection,
  center: [1580, 1830],
  zoom: 3,
  minZoom: 2,
  maxZoom: 5
});

var map = new ol.Map({
  controls: ol.control.defaults().extend([mousePositionControl]),
  layers: [photo, raster, vector],
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
var imgGal = JSON.parse(image);
var cooSel;

//Add option into select #coo
for (var i = 1; i<=21; i++) {
  $('#coo').append($('<option>', {
    value: i,
    text: obj.dum[i].cp
  }));
}

//Select item for display model
$('#coo').on('change', function() {
  cooSel = $('#coo').val();

  if (cooSel=="br") {
    view.setCenter([1580, 1830]);
    view.setZoom(3);
    $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[0].model + '"></iframe>');
    $('#obsah-popis').hide();
    $('#photo').hide();
    $('#but2').attr('disabled','disabled');

  }
  else {
    var sour = obj.dum[cooSel].souradnice;
    var xyi = sour.split(",").map(Number);
    var x = xyi[0];
    var y = xyi[1];

    view.setCenter([x, y]);
    view.setZoom(4);

    $('#but2').removeAttr('disabled');
    $('#obsah-model').show();

    if (obj.dum[cooSel].type=="unity") {
      $('#obsah-model').html('<a class="various" data-fancybox-type="iframe" href="' + obj.dum[cooSel].model + '"><img class="imgMod" src="' + obj.dum[cooSel].imgMod + '" alt=""/></a>');
      $('#but2').attr('disabled','disabled');
    }
    else if (obj.dum[cooSel].type=="gallery") {
      $('#obsah-model').html(
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img1 + '"><img class="imgMod" src="' + obj.dum[cooSel].imgMod + '" alt=""/></a>' +
        '<div class="hidden">' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img2 + '"><img class="imgMod" src="' + imgGal.img[0].img2 + '" alt=""/></a>' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img3 + '"><img class="imgMod" src="' + imgGal.img[0].img3 + '" alt=""/></a>' +
        '<a class="fancybox" rel="gal" href="' + imgGal.img[0].img4 + '"><img class="imgMod" src="' + imgGal.img[0].img4 + '" alt=""/></a>' +
        '</div>'
      );
      $('#but2').attr('disabled','disabled');
    }
    else {
      $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[cooSel].model + '"></iframe>');
    }

    if ($('.mapsec').css('display')=="none") {
      $('.modelsec').css('width','100%');
    }


    console.log($('.mapsec').css('width'));

    $('#obsah-popis').show();
    $('#obsah-popis').html(
      '<h3 class="nazev">' + obj.dum[cooSel].nazev + '</h3></br>' +
      '<p class="popis">' + obj.dum[cooSel].popis + '</p>');

    $('#photo').show();
    $('#photo').html('<img class="photo" src="' + obj.dum[cooSel].img + '" alt="">')
  }
});


//Button for default view
$('#but').click(function() {
  view.setCenter([1580, 1830]);
  view.setZoom(3);
  $('#coo').val("br");
  $('.mapsec').show();
  $('#but2').html("Skrýt mapu");
  $('#but2').attr('disabled','disabled');

  $('#obsah-model').html('<iframe class="frame" src="' + obj.dum[0].model + '"></iframe>');
  $('#obsah-popis').hide();
  $('#photo').hide();

  if ($('.container').width()<='750'){
    $('#obsah-model').css('width','100%');
  }
  else {
    $('#obsah-model').css('width','50%');
  }
});

//Button for hide and show map
$('#but2').click(function() {
  if ($('.container').width()<='750'){
    if ($('.mapsec').css('display')=="block") {
    $('.mapsec').hide();
    $('#but2').html("Zobrazit mapu");
    }
    else if ($('.mapsec').css('display')=="none") {
      $('.mapsec').show();
      $('#but2').html("Skrýt mapu");
    }
  }

  else {
    if ($('.mapsec').css('display')=="block") {
      $('.mapsec').hide();
      $('#but2').html("Zobrazit mapu");
      $('.modelsec').css('width','100%');
    }
    else if ($('.mapsec').css('display')=="none") {
      $('.mapsec').show();
      $('#but2').html("Skrýt mapu");
      $('.modelsec').css('width','50%');
    }
  }
});


