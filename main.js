import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 100, 1000 )
const helper = new THREE.CameraHelper( camera )
scene.add(helper)
camera.position.set(1, 0.5, 109)
camera.rotation.set(0, 0.01, -0.01)


//camera.zoom = 50




const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)




var light = new THREE.DirectionalLight( 0xffffff, .8 );
light.position.set(5, 20, 6.2)
light.castShadow = true
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
