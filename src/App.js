import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import "./App.css"
import Earth from './components/earth'
// import Earth from './components/earth'

function App() {
  return (
    <>
      <div className='container section'>
        <Canvas>
          <Earth />
        </Canvas>
      </div>
    </>
  )
}

export default App