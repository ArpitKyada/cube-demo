import { Suspense, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { useDrag } from "@use-gesture/react";

const Cube = ({ args }) => {
  const cube = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [position, setPosition] = useState([0, 0, 0]);

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  return (
    <mesh position={position} ref={cube} {...bind()}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

const Scene = ({ args }) => {
  return (
    <>
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Cube args={args} />
    </>
  );
};

const ElevationView = ({ args }) => {
  return (
    <div>
      <h6 className="h4 mx-auto d-flex justify-content-center my-3">Elevation View</h6>
      <div
        style={{
          height: "400px",
          width: "100%",
        }}
      >
        <Canvas
          concurrent="true"
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("grey");
          }}
        >
          <Suspense fallback={null}>
            <Scene args={args} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ElevationView;
