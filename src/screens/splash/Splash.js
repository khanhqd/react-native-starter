/* global window requestAnimationFrame cancelAnimationFrame */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { autobind } from 'core-decorators';
import { WebGLView } from 'react-native-webgl';
import THREE from './three';

console.ignoredYellowBox = ['THREE.WebGLRenderer'];

window.addEventListener = () => {};

export default class Splash extends Component {

  componentWillUnmount() {
    cancelAnimationFrame(this.requestId);
  }

  /**
   * Fired when GL context is ready to roll
   * @param {object} gl GLObject
   */
  @autobind
  onContextCreate(gl) {
    // Get the GL context
    const { drawingBufferWidth, drawingBufferHeight } = gl;
    this.gl = gl;
    this.rngl = gl.getExtension('RN');

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: {
        width: drawingBufferWidth,
        height: drawingBufferHeight,
        style: {},
        addEventListener: () => {},
        removeEventListener: () => {},
        clientHeight: drawingBufferHeight,
      },
      context: gl,
    });

    // Set renderer size and color
    renderer.setSize(drawingBufferWidth, drawingBufferHeight);
    renderer.setClearColor(0xFFFFFF, 1);
    
    // Make it globally available
    this.renderer = renderer;

    this.initialize();
    this.setupScene();
    this.renderFrame();
  }

  /**
   * Setup scene
   */
  setupScene() {
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    for (let i = 0; i < geometry.faces.length; i += 2) {
      const hex = Math.random() * 0xffffff;
      geometry.faces[i].color.setHex(hex);
      geometry.faces[i + 1].color.setHex(hex);
    }

    const material = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors,
      overdraw: 0.5,
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.y = 150;
    this.cube.rotation.y = 0.5;
    this.scene.add(this.cube);
  }

  /**
   * Initialize the GLView
   */
  initialize() {
    const { camera, gl } = this;

    // Set camera position
    camera.aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
    camera.position.y = 150;
    camera.position.z = 400;

    // Effects
    this.effect = new THREE.AnaglyphEffect(this.renderer);
    this.effect.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  }

  /**
   * Update parameters for each frame
   */
  update() {
    this.cube.rotation.y += 0.05;
    this.cube.rotation.x += 0.007;
  }

  // Request animation frame id
  requestId;

  // Scene objects
  camera = new THREE.PerspectiveCamera(75, 1, 1, 1100);
  scene = new THREE.Scene();

  /**
   * Render frame rAF
   */
  @autobind
  renderFrame() {
    this.requestId = requestAnimationFrame(this.renderFrame);
    this.renderer.render(this.scene, this.camera);
    this.update();
    this.gl.flush();
    this.rngl.endFrame();
  }

  render() {
    return (
      <View style={styles.host}>
        <WebGLView
          style={styles.gl}
          onContextCreate={this.onContextCreate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  host: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gl: {
    width: 300,
    height: 300,
  },
});
