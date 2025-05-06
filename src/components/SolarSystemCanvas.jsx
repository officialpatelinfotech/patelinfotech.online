import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import "../styles/SolarSystem.css";

const Moon = ({ earthPosition, orbitRadius, speed, texture, size, name }) => {
    const moonTexture = useLoader(THREE.TextureLoader, texture);

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => prev + speed);
        }, 16);
        return () => clearInterval(interval);
    }, [speed]);

    const x = earthPosition[0] + orbitRadius * Math.cos(angle);
    const z = earthPosition[2] + orbitRadius * Math.sin(angle);

    return (
        <>
            <mesh position={[x, earthPosition[1], z]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={moonTexture} />
            </mesh>

            <Text
                position={[x, earthPosition[1] + size + 0.3, z]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                billboard
            >
                {name}
            </Text>
        </>
    );
};

const Planet = ({ orbitRadius, speed, texture, size, lightColor, hasRing = false, ringTexture, hasMoon = false, name }) => {
    const planetTexture = useLoader(THREE.TextureLoader, texture);
    // const ringTextureMap = hasRing ? useLoader(THREE.TextureLoader, ringTexture) : null;

    // const ringTextureMap = useLoader(THREE.TextureLoader, ringTexture);
    // ringTextureMap = hasRing ? ringTextureMap : null;

    const ringTextureMap = useMemo(() => {
        if (!hasRing) return null;
        return new THREE.TextureLoader().load(ringTexture);
      }, [hasRing, ringTexture]);
      


    const [angle, setAngle] = useState(0);
    const planetRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => prev + speed);
        }, 16);
        return () => clearInterval(interval);
    }, [speed]);

    const x = orbitRadius * Math.cos(angle);
    const z = orbitRadius * Math.sin(angle);

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.01;
        }
    });

    return (
        <>
            <mesh ref={planetRef} position={[x, 0, z]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={planetTexture} />
            </mesh>

            <Text
                position={[x, size + 0.5, z]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                billboard
            >
                {name}
            </Text>

            {hasRing && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0, z]}>
                    <ringGeometry args={[size + 0.4, size + 1, 128]} />
                    <meshStandardMaterial
                        map={ringTextureMap}
                        side={THREE.DoubleSide}
                        transparent
                        opacity={0.8}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            )}

            {hasMoon && (
                <Moon
                    earthPosition={[x, 0, z]}
                    orbitRadius={1.5}
                    speed={0.03}
                    texture="/textures/moon.jpg"
                    size={0.2}
                    name="Moon"
                />
            )}

            {lightColor && (
                <pointLight
                    position={[x, 0, z]}
                    intensity={10}
                    color={lightColor}
                    decay={2}
                    distance={20}
                />
            )}
        </>
    );
};

const SolarSystem = () => {
    return (
        <Canvas style={{ height: '100vh', background: 'black' }}>
            <ambientLight intensity={0.5} />

            <Stars
                radius={300}
                depth={80}
                count={20000}
                factor={8}
                saturation={0}
                fade
            />

            <Planet
                orbitRadius={0}
                speed={0}
                texture="/textures/sun.jpg"
                size={2.5}
                lightColor="yellow"
                name="Sun"
            />

            <Planet orbitRadius={4} speed={0.02} texture="/textures/mercury.jpg" size={0.3} lightColor="gray" name="Mercury" />
            <Planet orbitRadius={6} speed={0.015} texture="/textures/venus.jpg" size={0.6} lightColor="orange" name="Venus" />
            <Planet orbitRadius={8} speed={0.01} texture="/textures/earth.jpg" size={0.65} lightColor="blue" hasMoon={true} name="Earth" />
            <Planet orbitRadius={10} speed={0.008} texture="/textures/mars.jpg" size={0.4} lightColor="red" name="Mars" />
            <Planet orbitRadius={14} speed={0.005} texture="/textures/jupiter.jpg" size={1.2} lightColor="orange" name="Jupiter" />
            <Planet
                orbitRadius={18}
                speed={0.004}
                texture="/textures/saturn.jpg"
                size={1.1}
                lightColor="yellow"
                hasRing={true}
                ringTexture="/textures/saturn_ring.png"
                name="Saturn"
            />
            <Planet orbitRadius={22} speed={0.003} texture="/textures/uranus.jpg" size={0.9} lightColor="lightblue" name="Uranus" />
            <Planet orbitRadius={26} speed={0.002} texture="/textures/neptune.jpg" size={0.85} lightColor="blue" name="Neptune" />
            <Planet orbitRadius={30} speed={0.001} texture="/textures/pluto.jpg" size={0.2} lightColor="white" name="Pluto" />
            <OrbitControls />
        </Canvas>
    );
};

export default SolarSystem;