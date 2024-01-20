"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // ----- Earth Object -----
    // Load Earth Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/images/earthTexture.jpg");
    const moonTexture = textureLoader.load("/images/moonTexture.jpg"); // Add your moon texture path

    // Earth Sphere
    const sphereGeometry = new THREE.SphereGeometry(4, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(sphereGeometry, earthMaterial);
    scene.add(earth);

    // Set Earth's tilt
    const earthTilt = 23.5 * (Math.PI / 180); // Convert tilt angle to radians
    earth.rotation.y = earthTilt; // Apply the tilt

    // ----- Earth Object -----

    // ----- Moon Object -----
    // Moon Sphere
    const moonGeometry = new THREE.SphereGeometry(0.25, 32, 32); // Smaller sphere for the moon
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    // Moon Initial positions - Increase the initial distance of the moon from the Earth
    const moonDistance = 5; // Set this to the distance you want the moon to be from the Earth
    moon.position.set(0, moonDistance, 0);
    // ----- Moon Object -----

    // ----- Satellite Object -----
    // Satellite parameters
    const numberOfSatellites = 6; // Choose how many satellites you want
    const satelliteDistance = 4.5; // Distance from the Earth to the satellites
    const satelliteSize = 0.1; // Size of the satellites
    const satellites: THREE.Mesh[] = []; // Array to hold the satellite meshes

    for (let i = 0; i < numberOfSatellites; i++) {
      // Create geometry and material for each satellite
      const satelliteGeometry = new THREE.BoxGeometry(
        satelliteSize,
        satelliteSize,
        satelliteSize
      );
      const satelliteMaterial = new THREE.MeshBasicMaterial({
        color: 0xaaaaaa,
      });

      // Create the satellite mesh
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);

      // Set an initial position for each satellite
      satellite.position.set(
        satelliteDistance * Math.cos(((2 * Math.PI) / numberOfSatellites) * i),
        satelliteDistance * Math.sin(((2 * Math.PI) / numberOfSatellites) * i),
        0
      );

      // Add the satellite mesh to the scene and to the satellites array
      scene.add(satellite);
      satellites.push(satellite);
    }
    // ----- Satellite Object -----

    camera.position.z = 10; // Adjust camera distance if needed

    const animate = () => {
      requestAnimationFrame(animate);

      // Earth rotation
      // Instead of rotating the Earth on the y-axis, we'll rotate it on a new tilted axis
      const tiltAxis = new THREE.Vector3(
        0,
        Math.cos(earthTilt),
        Math.sin(earthTilt)
      ); // Create a new axis of rotation based on the tilt
      earth.rotateOnAxis(tiltAxis, 0.005); // Rotate the Earth around the tilted axis

      // Moon rotation and orbit
      moon.rotation.y += 0.01; // Rotates the moon on its axis

      // Define the orbital inclination angle (e.g., 5 degrees here)
      const orbitalInclination = 25 * (Math.PI / 180); // Convert to radians

      // Time factor for the orbit to control the speed of the moon's revolution
      const time = Date.now() * 0.001;

      // Calculate the moon's orbital position
      moon.position.x = moonDistance * Math.cos(time);
      moon.position.y =
        moonDistance * Math.sin(time) * Math.sin(orbitalInclination);
      moon.position.z =
        moonDistance * Math.sin(time) * Math.cos(orbitalInclination);

      // Update each satellite's orbit
      satellites.forEach((satellite, index) => {
        // Calculate the orbital position for each satellite
        const time = Date.now() * 0.0002 + index; // Offset each satellite's starting position
        satellite.position.x = satelliteDistance * Math.cos(time);
        satellite.position.y = satelliteDistance * Math.sin(time);

        // Optionally rotate each satellite on its axis
        satellite.rotation.x += 0.05;
        satellite.rotation.y += 0.05;
        satellite.rotation.z += 0.05;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (ref.current) {
        const containerWidth = ref.current.clientWidth;
        const containerHeight = ref.current.clientHeight;

        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(containerWidth, containerHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={ref}></div>;
}