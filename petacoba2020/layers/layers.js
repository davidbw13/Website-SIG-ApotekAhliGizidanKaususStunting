var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kecamatan_pati_0 = new ol.format.GeoJSON();
var features_kecamatan_pati_0 = format_kecamatan_pati_0.readFeatures(json_kecamatan_pati_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_pati_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_pati_0.addFeatures(features_kecamatan_pati_0);var lyr_kecamatan_pati_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_pati_0, 
                style: style_kecamatan_pati_0,
    title: 'kecamatan_pati<br />\
    <img src="styles/legend/kecamatan_pati_0_0.png" />  Sangat Sedikit<br />\
    <img src="styles/legend/kecamatan_pati_0_1.png" /> Sedikit<br />\
    <img src="styles/legend/kecamatan_pati_0_2.png" /> Banyak<br />\
    <img src="styles/legend/kecamatan_pati_0_3.png" /> Sangat Banyak <br />'
        });var format_Apotek_1 = new ol.format.GeoJSON();
var features_Apotek_1 = format_Apotek_1.readFeatures(json_Apotek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apotek_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Apotek_1.addFeatures(features_Apotek_1);var lyr_Apotek_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Apotek_1, 
                style: style_Apotek_1,
                title: '<img src="styles/legend/Apotek_1.png" /> Apotek'
            });

lyr_kecamatan_pati_0.setVisible(true);lyr_Apotek_1.setVisible(true);
var layersList = [baseLayer,lyr_kecamatan_pati_0,lyr_Apotek_1];
lyr_kecamatan_pati_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Apotek': 'Apotek', 'Ahli_Gizi': 'Ahli_Gizi', 'Stunting': 'Stunting', });
lyr_Apotek_1.set('fieldAliases', {'Apotek': 'Apotek', 'Lokasi': 'Lokasi', });
lyr_kecamatan_pati_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Apotek': 'TextEdit', 'Ahli_Gizi': 'TextEdit', 'Stunting': 'TextEdit', });
lyr_Apotek_1.set('fieldImages', {'Apotek': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_kecamatan_pati_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Apotek': 'inline label', 'Ahli_Gizi': 'inline label', 'Stunting': 'inline label', });
lyr_Apotek_1.set('fieldLabels', {'Apotek': 'no label', 'Lokasi': 'header label', });
lyr_Apotek_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});