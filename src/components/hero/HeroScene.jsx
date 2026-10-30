import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Environment,
} from "@react-three/drei";

function AnimatedCore() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const { x, y } = state.pointer;
    const targetX = y * 0.25;
    const targetY = x * 0.35;

    // Smooth rotation
    meshRef.current.rotation.x +=
      (targetX - meshRef.current.rotation.x) * Math.min(delta * 1.5, 1);

    meshRef.current.rotation.y +=
      delta * 0.2 +
      (targetY - meshRef.current.rotation.y) * Math.min(delta * 1.5, 1);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />

        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.7}
          distort={0.22}
          speed={1.5}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y -= delta * 0.25;
    meshRef.current.rotation.z += delta * 0.12;
  });

  return (
    <mesh ref={meshRef} scale={0.68}>
      <icosahedronGeometry args={[1, 2]} />

      <meshStandardMaterial
        color="#171326"
        emissive="#31205c"
        emissiveIntensity={0.25}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

function OrbitRing({ radius, color, rotation, speed }) {
  const ringRef = useRef(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.008, 8, 120]} />

      <meshBasicMaterial color={color} transparent opacity={0.65} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.65} />

      <directionalLight position={[4, 5, 4]} intensity={1.8} color="#ffffff" />

      <pointLight
        position={[-3, -2, 3]}
        intensity={5}
        distance={9}
        color="#8b5cf6"
      />

      <pointLight
        position={[3, 2, -3]}
        intensity={4}
        distance={8}
        color="#6366f1"
      />

      <AnimatedCore />

      <InnerCore />

      {/* Orbiting rings */}
      <OrbitRing
        radius={2}
        color="#a78bfa"
        rotation={[0.8, 0.3, 0]}
        speed={0.12}
      />

      <OrbitRing
        radius={2.2}
        color="#6366f1"
        rotation={[1.2, 0.8, 0.5]}
        speed={-0.09}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        enableDamping
      />
    </>
  );
}

function HeroScene() {
  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-3xl bg-transparent sm:min-h-[400px] lg:min-h-[500px]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]" />

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
        fallback={
          <div className="flex h-full min-h-[300px] items-center justify-center text-sm text-violet-300">
            3D visualization is unavailable.
          </div>
        }
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene;
