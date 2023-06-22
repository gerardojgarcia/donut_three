import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, 1, 1, 10000)
camera.position.set(0, 0, 500)


const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)


var controls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );




///Model Loader

const loader = new GLTFLoader()

loader.load( '/pinche_donut_2.glb', function(gltf) {

  console.log(gltf)
  scene.add(gltf.scene)

}, undefined, function(error){
  console.log(error)
})


function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}


animate()
