import {Suspense, useEffect, useState} from 'react';
import { Canvas }  from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';




const ComputersMoodel = ({isMobile}) => {
  const computer = useGLTF('public/desktop_pc/scene.gltf');
  
  {/*Adding lights to the mesh*/}

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity = {1}/>
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapsize= {1024}
      
      />
      <primitive 
        object={computer.scene}
        scale = {isMobile? 0.5 : 0.75}
        position={isMobile? [0,-3,-2.2]: [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect (() => {

    // add a media query listener to detect screen size changes
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // set the initial value of isMobile based on the current screen size
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])


  return(
    <Canvas 
      frameloop = "demand"
      shadows
      camera = {{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls 
          enableZoom = {false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputersMoodel isMobile = {isMobile}/>
      </Suspense>
      

    </Canvas>
  )
}

export default ComputersCanvas