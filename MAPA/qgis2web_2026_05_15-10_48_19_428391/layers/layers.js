var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOS_1 = new ol.format.GeoJSON();
var features_MUNICIPIOS_1 = format_MUNICIPIOS_1.readFeatures(json_MUNICIPIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_1.addFeatures(features_MUNICIPIOS_1);
var lyr_MUNICIPIOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_1, 
                style: style_MUNICIPIOS_1,
                popuplayertitle: 'MUNICIPIOS',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_1.png" /> MUNICIPIOS'
            });
var format_MunicipiosconpresenciadelGBG_2 = new ol.format.GeoJSON();
var features_MunicipiosconpresenciadelGBG_2 = format_MunicipiosconpresenciadelGBG_2.readFeatures(json_MunicipiosconpresenciadelGBG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosconpresenciadelGBG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosconpresenciadelGBG_2.addFeatures(features_MunicipiosconpresenciadelGBG_2);
var lyr_MunicipiosconpresenciadelGBG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosconpresenciadelGBG_2, 
                style: style_MunicipiosconpresenciadelGBG_2,
                popuplayertitle: 'Municipios con presencia del GBG',
                interactive: true,
                title: '<img src="styles/legend/MunicipiosconpresenciadelGBG_2.png" /> Municipios con presencia del GBG'
            });
var format_Casos_3 = new ol.format.GeoJSON();
var features_Casos_3 = format_Casos_3.readFeatures(json_Casos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_3.addFeatures(features_Casos_3);
var lyr_Casos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casos_3, 
                style: style_Casos_3,
                popuplayertitle: 'Casos',
                interactive: true,
                title: '<img src="styles/legend/Casos_3.png" /> Casos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MUNICIPIOS_1.setVisible(true);lyr_MunicipiosconpresenciadelGBG_2.setVisible(true);lyr_Casos_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MUNICIPIOS_1,lyr_MunicipiosconpresenciadelGBG_2,lyr_Casos_3];
lyr_MUNICIPIOS_1.set('fieldAliases', {'nomgeo': 'nomgeo', });
lyr_MunicipiosconpresenciadelGBG_2.set('fieldAliases', {'nomgeo': 'nomgeo', });
lyr_Casos_3.set('fieldAliases', {'Casos': 'Casos', });
lyr_MUNICIPIOS_1.set('fieldImages', {'nomgeo': 'TextEdit', });
lyr_MunicipiosconpresenciadelGBG_2.set('fieldImages', {'nomgeo': 'TextEdit', });
lyr_Casos_3.set('fieldImages', {'Casos': 'Range', });
lyr_MUNICIPIOS_1.set('fieldLabels', {'nomgeo': 'no label', });
lyr_MunicipiosconpresenciadelGBG_2.set('fieldLabels', {'nomgeo': 'no label', });
lyr_Casos_3.set('fieldLabels', {'Casos': 'no label', });
lyr_Casos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});