"use client";

// imports
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTF } from "three-stdlib";
import { useAppDispatch } from "../../../hooks/storeHook";
import { setSpaceBoy } from "../../../redux/features/refsSlice";

type SpaceBoyProps = GLTF & {
  nodes: {
    body_Material001_0: THREE.Mesh;
    body_Material002_0: THREE.Mesh;
    waves_Material002_0: THREE.Mesh;
    waves1_Material002_0: THREE.Mesh;
    waves2_Material002_0: THREE.Mesh;
    particles_Material002_0: THREE.Mesh;
    Sphere_Material001_0: THREE.Mesh;
    Sphere001_Material002_0: THREE.Mesh;
    Sphere004_Material002_0: THREE.Mesh;
    Sphere005_Material001_0: THREE.Mesh;
    Sphere006_Material002_0: THREE.Mesh;
    Sphere009_Material002_0: THREE.Mesh;
    Sphere010_Material002_0: THREE.Mesh;
    Sphere011_Material002_0: THREE.Mesh;
    Cube_Material001_0: THREE.Mesh;
    Sphere002_Material001_0: THREE.Mesh;
    Sphere002_Material002_0: THREE.Mesh;
    Sphere003_Material002_0: THREE.Mesh;
    Sphere007_Material001_0: THREE.Mesh;
    Sphere007_Material002_0: THREE.Mesh;
    Sphere008_Material002_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshBasicMaterial;
    ["Material.002"]: THREE.MeshBasicMaterial;
  };
};

const SpaceBoy = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/assets/models/spaceBoy/scene.glb"
  ) as SpaceBoyProps;

  const ref = useRef<Group>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current) {
      dispatch(setSpaceBoy(ref.current));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const asTroBoy = useControls({
  //   position: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     step: 0.001,
  //   },
  //   rotation: {
  //     value: {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //     },
  //     step: 0.001,
  //   },
  // });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        // position={[
        //   asTroBoy.position.x,
        //   asTroBoy.position.y,
        //   asTroBoy.position.z,
        // ]}
        // rotation={[
        //   asTroBoy.rotation.x,
        //   asTroBoy.rotation.y,
        //   asTroBoy.rotation.z,
        // ]}
        position={[0.3910000000000002, -5.671999999999996, 7.6000000000000005]}
        rotation={[0, 0.9270000000000007, 0]}
      >
        <group scale={0.01}>
          <group name="boy" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.body_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.body_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[-357.4, 392.65, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={39.71}
          >
            <mesh
              geometry={nodes.Sphere002_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Sphere002_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[199.63, 566.88, -221]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={39.71}
          >
            <mesh
              geometry={nodes.Sphere007_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Sphere007_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <mesh
            geometry={nodes.waves_Material002_0.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 1.89]}
          />
          <mesh
            geometry={nodes.waves1_Material002_0.geometry}
            material={materials["Material.002"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 1.89]}
          />
          <mesh
            geometry={nodes.waves2_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[92.46, 15.53, 2.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 1.89]}
          />
          <mesh
            geometry={nodes.particles_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[489.69, 793.81, 355.29]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={20.41}
          />
          <mesh
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[375.47, 427.95, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={62.4}
          />
          <mesh
            geometry={nodes.Sphere001_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[375.47, 427.95, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60.32}
          />
          <mesh
            geometry={nodes.Sphere004_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[375.47, 427.95, 0]}
            rotation={[-0.69, 0, 0]}
            scale={[104.13, 81.61, 0]}
          />
          <mesh
            geometry={nodes.Sphere005_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-341.99, 460.2, -117.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={62.4}
          />
          <mesh
            geometry={nodes.Sphere006_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-341.99, 460.2, -117.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60.32}
          />
          <mesh
            geometry={nodes.Sphere009_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[507.52, 667.59, -214.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={16.88}
          />
          <mesh
            geometry={nodes.Sphere010_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-287.44, 585.79, -311.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={16.88}
          />
          <mesh
            geometry={nodes.Sphere011_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-553.46, 331.07, -379.07]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={11.44}
          />
          <mesh
            geometry={nodes.Cube_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, -101.67, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1120.01, 1120.01, 100]}
          />
          <mesh
            geometry={nodes.Sphere003_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-357.4, 392.65, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={41.07}
          />
          <mesh
            geometry={nodes.Sphere008_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[199.63, 566.88, -221]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={41.07}
          />
        </group>
      </group>
    </group>
  );
};

export default SpaceBoy;
useGLTF.preload("/assets/models/spaceBoy/scene.glb");
