<template>
    <canvas @mousemove="mouseMoveHandler"></canvas>
</template>
<script>
import * as THREE from 'three'

export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            mesh: null,
        }
    },
    mounted() {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0x1a1a1a)
        this.camera = new THREE.PerspectiveCamera(75, this.$el.clientWidth / this.$el.clientHeight, 0.1, 1000)
        this.camera.position.z = 5
        this.renderer = new THREE.WebGLRenderer({ canvas: this.$el })
        this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight)

        let geometry = new THREE.SphereGeometry(0.05, 8, 6)
        let material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffffff) })
        this.mesh = new THREE.Mesh(geometry, material)
        this.scene.add(this.mesh)

        //TODO: add trail

        this.animationLoop()
    },
    //TODO: remove context on unmount
    methods: {
        animationLoop: function() {
            this.renderer.render(this.scene, this.camera)
            this.mesh.rotation.y += 0.01

            requestAnimationFrame(() => {
                this.animationLoop()
            })
        },

        //this stackoverflow answer & all the comments helped a ton: https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z?answertab=votes#tab-top
        //the reverse explaination helped my understanding as well: https://discourse.threejs.org/t/how-to-converting-world-coordinates-to-2d-mouse-coordinates-in-threejs/2251
        //anyways my knowledge about screen projection does not go too deep so it's time to learn a bit more 
        mouseMoveHandler: function(e) {
            //normalise mouse coordinates & transform into world coordinates
            let normalisedX = (e.clientX / this.$el.clientWidth) * 2 - 1
            let normalisedY = - (e.clientY / this.$el.clientHeight) * 2 + 1
            let normalisedMouseCoordinates = new THREE.Vector3(normalisedX, normalisedY, 0)
            let mouseInNormalisedWorldCoordinates = normalisedMouseCoordinates.unproject(this.camera)

            //resulting world position is not z = 0 
            //first further normalise the mouse-world coordinates by taking the camera position into account (removing camera distance)
            //calculate the distance between the camera position and the new mouse-world coordinates afterwards
            mouseInNormalisedWorldCoordinates.sub(this.camera.position).normalize()
            let distance = - this.camera.position.z / mouseInNormalisedWorldCoordinates.z

            //from the camera's point of view apply the normalised mouse-world coordinates but amplify them by the computed distance
            let cameraPosition = new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z)
            let mouseInWorldCoordinates = cameraPosition.add(mouseInNormalisedWorldCoordinates.multiplyScalar(distance))

            //assign computed position to mesh
            this.mesh.position.x = mouseInWorldCoordinates.x
            this.mesh.position.y = mouseInWorldCoordinates.y
        },
    }
}
</script>
<style scoped>
    canvas {
        margin: 0;
        padding: 0; 
        width: 100vw;
        height: 100vh;
    }
</style>

