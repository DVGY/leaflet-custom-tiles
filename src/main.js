import './style.css';
import { mapInstance } from './mapInstance';
import { mapBox, ESRIImagery, OpenTopo, customTileLayer } from './baseMaps';

const ZoomViewer = L.Control.extend({
  onAdd() {
    const gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mapInstance.on('zoomstart zoom zoomend', (ev) => {
      gauge.innerHTML = `Zoom level: ${mapInstance.getZoom()}`;
    });
    return gauge;
  },
});

new ZoomViewer().addTo(mapInstance);

L.control
  .layers({
    // 'Map Box': mapBox,
    // 'ESRI World Imagery': ESRIImagery,
    // 'Open Topo': OpenTopo,
    'Custom Image': customTileLayer,
  })
  .addTo(mapInstance);

customTileLayer.addTo(mapInstance);
