var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_pruebas_mun_1 = new ol.format.GeoJSON();
var features_pruebas_mun_1 = format_pruebas_mun_1.readFeatures(json_pruebas_mun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pruebas_mun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pruebas_mun_1.addFeatures(features_pruebas_mun_1);
var lyr_pruebas_mun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pruebas_mun_1, 
                style: style_pruebas_mun_1,
                popuplayertitle: 'pruebas_mun',
                interactive: true,
                title: '<img src="styles/legend/pruebas_mun_1.png" /> pruebas_mun'
            });
var format_gusano_2 = new ol.format.GeoJSON();
var features_gusano_2 = format_gusano_2.readFeatures(json_gusano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gusano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gusano_2.addFeatures(features_gusano_2);
var lyr_gusano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gusano_2, 
                style: style_gusano_2,
                popuplayertitle: 'gusano',
                interactive: true,
                title: '<img src="styles/legend/gusano_2.png" /> gusano'
            });
var format_gusanobarrenador_3 = new ol.format.GeoJSON();
var features_gusanobarrenador_3 = format_gusanobarrenador_3.readFeatures(json_gusanobarrenador_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gusanobarrenador_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gusanobarrenador_3.addFeatures(features_gusanobarrenador_3);
var lyr_gusanobarrenador_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gusanobarrenador_3, 
                style: style_gusanobarrenador_3,
                popuplayertitle: 'gusanobarrenador',
                interactive: true,
                title: '<img src="styles/legend/gusanobarrenador_3.png" /> gusanobarrenador'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_pruebas_mun_1.setVisible(true);lyr_gusano_2.setVisible(true);lyr_gusanobarrenador_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_pruebas_mun_1,lyr_gusano_2,lyr_gusanobarrenador_3];
lyr_pruebas_mun_1.set('fieldAliases', {'nomgeo': 'nomgeo', });
lyr_gusano_2.set('fieldAliases', {'nomgeo': 'nomgeo', });
lyr_gusanobarrenador_3.set('fieldAliases', {'id': 'id', });
lyr_pruebas_mun_1.set('fieldImages', {'nomgeo': 'TextEdit', });
lyr_gusano_2.set('fieldImages', {'nomgeo': 'TextEdit', });
lyr_gusanobarrenador_3.set('fieldImages', {'id': 'TextEdit', });
lyr_pruebas_mun_1.set('fieldLabels', {'nomgeo': 'no label', });
lyr_gusano_2.set('fieldLabels', {'nomgeo': 'no label', });
lyr_gusanobarrenador_3.set('fieldLabels', {'id': 'no label', });
lyr_gusanobarrenador_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});