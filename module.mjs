import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "https://threejs.org/examples/jsm/loaders/FontLoader.js";

let camera, scene, renderer;
let geometry, material, mesh;

init();
animate();

function init() {
  // Create a camera that looks towards the center of the scene
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  // Create a scene to hold our 3D content
  scene = new THREE.Scene();

  // Load the font
  const loader = new THREE.FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      // Create a geometry and a material for our mesh
      geometry = new THREE.TextGeometry("Hello", {
        font: font,
        size: 0.2,
        height: 0.05,
        curveSegments: 12,
      });

      material = new THREE.MeshNormalMaterial();

      // Create a mesh using the geometry and material
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }
  );

  // Create a renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add orbit controls to allow for mouse interaction
  const controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
  // This function will be called once per frame
  requestAnimationFrame(animate);

  // Update the mesh rotation
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  // Render the scene
  renderer.render(scene, camera);
}
