import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityList from '../src/CityList'
import Header from './Header'
import PageContainer from './Container/PageContainer'
import RouterConfig from './config/RouterConfig'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <PageContainer>
          <RouterConfig />
        </PageContainer>
      </BrowserRouter>

    </div>
  )
}

export default App
