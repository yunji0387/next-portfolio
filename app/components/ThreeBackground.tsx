"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth , window.innerHeight );
    ref.current.appendChild(renderer.domElement);

    // Load Earth Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/images/earthTexture.jpg'); // Replace with your texture path

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
      const newWidth = window.innerWidth * 0.8;
      const newHeight = 100;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (ref.current) {
        ref.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={ref}></div>;
}


// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// export function ThreeBackground() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!ref.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     ref.current.appendChild(renderer.domElement);

//     // Add your Three.js objects here
//     // Sphere geometry
//     const radius = 2; // Radius of the sphere
//     const widthSegments = 32; // Number of horizontal segments
//     const heightSegments = 32; // Number of vertical segments
//     const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const sphere = new THREE.Mesh(sphereGeometry, material);
//     scene.add(sphere);

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       if (ref.current) {
//         ref.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <div ref={ref}></div>;
// };