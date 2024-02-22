import React, { useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { StateContext } from "../../context/StateContext";

const Ball = (props) => {
  const { screenWidth } = useContext(StateContext);
  let _scale;
  screenWidth < 800 ? (_scale = 1.75) : (_scale = 2.15);
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={_scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  useEffect(() => {
    const renderer = document.getElementById("canvasRenderer");

    const handleContextLost = (event) => {
      event.preventDefault();
      // animationID would have been set by your call to requestAnimationFrame
      cancelAnimationFrame(animationID);
    };

    const handleContextRestored = (event) => {
      // Do something
    };

    renderer?.addEventListener("webglcontextlost", handleContextLost, false);
    renderer?.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      renderer?.removeEventListener(
        "webglcontextlost",
        handleContextLost,
        false
      );
      renderer?.removeEventListener(
        "webglcontextrestored",
        handleContextRestored,
        false
      );
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      id="canvasRenderer"
    >
      <OrbitControls enableZoom={false} position0={0} />
      <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
