import './style.css';
import { mapInstance } from './mapInstance';
import { mapBox, ESRIImagery, OpenTopo } from './baseMaps';

L.control
  .layers({
    'Map Box': mapBox,
    'ESRI World Imagery': ESRIImagery,
    'Open Topo': OpenTopo,
  })
  .addTo(mapInstance);

mapBox.addTo(mapInstance);
