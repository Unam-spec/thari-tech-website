import { useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Liquid-glass crystal hero centerpiece.
 * A faceted icosahedron in transmission glass, slowly rotating and reacting to
 * the pointer, refracting colored light-orbs placed behind it. Written from
 * scratch (no external scene/asset) so it's fully ours.
 */
function CrystalMesh() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    // Continuous slow spin
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.rotation.z += delta * 0.04;
    // Ease toward pointer for a parallax tilt
    const px = state.pointer.x;
    const py = state.pointer.y;
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      py * 0.35,
      0.05,
    );
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      px * 0.25,
      0.05,
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 0]} />
        <MeshTransmissionMaterial
          samples={6}
          resolution={512}
          thickness={1.4}
          roughness={0.05}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.35}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.2}
          clearcoat={1}
          attenuationColor={"#cdbfff"}
          color={"#ffffff"}
          backside
        />
      </mesh>
    </Float>
  );
}

function Orb(props: ThreeElements["mesh"] & { color: string; scale: number }) {
  const { color, scale, ...rest } = props;
  return (
    <mesh scale={scale} {...rest}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

export default function Crystal() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <pointLight position={[-4, -2, -3]} intensity={3} color="#4F3CF0" />

      {/* Colored light-orbs behind the crystal — refracted through the glass */}
      <Orb position={[-1.6, 1.2, -2.5]} color="#4F3CF0" scale={1.1} />
      <Orb position={[1.8, -1.0, -2.8]} color="#6E5BFF" scale={0.9} />
      <Orb position={[0.4, 1.8, -3.2]} color="#E8B27A" scale={0.6} />

      <CrystalMesh />

      {/* In-scene environment (no external HDR) so the glass has light to
          reflect and refract instead of rendering black. */}
      <Environment resolution={256}>
        <Lightformer intensity={2.4} position={[0, 3, 2]} scale={[8, 3, 1]} color="#ffffff" />
        <Lightformer intensity={1.4} position={[-3, 1, 2]} scale={[3, 4, 1]} color="#cdbfff" />
        <Lightformer intensity={1.6} position={[3, -1, 1]} scale={[3, 4, 1]} color="#6E5BFF" />
        <Lightformer intensity={1.2} position={[0, -3, 1]} scale={[8, 2, 1]} color="#E8B27A" />
      </Environment>
    </Canvas>
  );
}
