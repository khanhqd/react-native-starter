const THREE = require('three');

global.THREE = THREE;

// Extend THREE.js
require('three/examples/js/renderers/Projector');
require('three/examples/js/effects/AnaglyphEffect.js');
require('three/examples/js/Detector.js');

export default THREE;
