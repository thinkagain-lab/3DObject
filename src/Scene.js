import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, PresentationControls, Stage } from '@react-three/drei';

// Function to load GLTF model
function TruckModel() {
  const { scene } = useGLTF('shiba.glb');
  return <primitive object={scene} />;
}
function BoxModel() {
  const { scene } = useGLTF('box.glb');
  return <primitive object={scene} />;
}
function ShibaModel() {
  const { scene } = useGLTF('shiba.glb');
  return <primitive object={scene} />;
}
function Model(props) {
  const { scene } = useGLTF("/box.glb");
  return <primitive object={scene} {...props} />
}

// Main Scene component
function Scene() {
  return (
    <>       
        <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </>
  );
}

export default Scene;
