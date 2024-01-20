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

    // Load Earth Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/images/earthTexture.jpg"); // Replace with your texture path

    // Sphere geometry
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005; // Rotates the sphere around the y-axis
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      // Ensure ref.current is not null before proceeding
      if (ref.current) {
        const containerWidth = ref.current.clientWidth;
        const containerHeight = ref.current.clientHeight; // or a fixed height if you prefer

        // Update camera aspect ratio to match the new container dimensions
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();

        // Update renderer size
        renderer.setSize(containerWidth, containerHeight);
      }
    };

    // Initial call to handleResize to set the correct dimensions from the start
    handleResize(); // Call this function inside your useEffect after setting up the renderer

    window.addEventListener("resize", handleResize);

    // Remember to remove the event listener on cleanup
    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={ref}></div>;
}
