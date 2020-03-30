import React, { Component } from "react";

import classes from './IndexBanner.module.scss';

import * as THREE from "three";

class IndexBanner extends Component {
  componentDidMount() {
    var camera,
    scene,
    renderer,
    particles,
    particle,
    material,
    particleCount,
    points;
    
    var xSpeed, ySpeed;
    xSpeed = 0.0005;
    ySpeed = 0.0005;

    var winWidth, winHeight;
    var parentContainer = document.getElementById('mainCanvas');

    winWidth = parentContainer.clientWidth;
    winHeight = parentContainer.clientHeight;

    // Resize
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      camera.aspect = parentContainer.clientWidth / parentContainer.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(parentContainer.clientWidth, parentContainer.clientHeight);
    }

    function init() {
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2('#222', 0.001);

      camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 1, 1000);
      camera.position.z = 1000;

      material = new THREE.PointsMaterial({
        color: '#477979',
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending
      });

      particleCount = 12500;
      particles = new THREE.Geometry();

      for (var i = 0; i < particleCount; i++) {
        var px = Math.random() * 2000 - 1000;
        var py = Math.random() * 2000 - 1000;
        var pz = Math.random() * 2000 - 1000;
        particle = new THREE.Vector3(px, py, pz);
        particle.velocity = new THREE.Vector3(0, 0, 0);
        particles.vertices.push(particle);
      }

      points = new THREE.Points(particles, material);
      points.sortParticles = true;
      scene.add(points);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(winWidth, winHeight);
      renderer.setClearColor('#181818', 1);
      document.getElementById('canvas').appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      scene.rotation.y += xSpeed;

      var i = particleCount;
      while (i--) {
        var particle = particles.vertices[i];

        if (particle.y > 1000) {
          particle.y = -1000;
          particle.velocity.y = Math.random();
        }
        particle.velocity.y += Math.random() * ySpeed;

        particle.add(particle.velocity);
      }
      points.geometry.verticesNeedUpdate = true;

      render();
    }

    function render() {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    init();
    animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    // this.mount.removeChild(this.renderer.domElement);
  }

  render() {
    return (
      <div id="mainCanvas" className={classes.MainCanvas}>
        <div className={classes.IndexTitle}>
          <div className="small-12 column">
            <h1 data-aos="fade-down" data-aos-delay="600">Corey&nbsp;Noble</h1>
            <h2 data-aos="fade-up" data-aos-delay="1200"><em>Web&nbsp;Application&nbsp;Developer</em></h2>
          </div>
        </div>
        <div id="canvas" className={classes.Canvas}></div>
      </div>
    );
  }
}

export default IndexBanner;