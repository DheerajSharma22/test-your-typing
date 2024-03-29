import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
/* 

 {
  blueDolphin: {
    name: 'Blue Dolphin',
    background: {
      primary: '#003950',
      secondary: '#014961',
    },
    text: {
      primary: '#6DEAFF',
      secondary: '#FFCEFB',
      title: '#6DEAFF',
    },
  },
  aurora: {
    name: 'Aurora',
    background: {
      primary: '#011926',
      secondary: '#000C13',
    },
    text: {
      primary: '#235A68',
      secondary: '#00E980',
      title: '#00E980',
    },
  },
  paper: {
    name: 'Paper',
    background: {
      primary: '#EEEEEE',
      secondary: '#DDDDDD',
    },
    text: {
      primary: '#B4B4B4',
      secondary: '#444444',
      title: '#444444',
    },
  },
  cyberspace: {
    name: 'Cyberspace',
    background: {
      primary: '#181C18',
      secondary: '#131613',
    },
    text: {
      primary: '#9578D3',
      secondary: '#04AF6A',
      title: '#9578D3',
    },
  },
  cheesecake: {
    name: 'Cheesecake',
    background: {
      primary: '#FDF0D5',
      secondary: '#F3E2BF',
    },
    text: {
      primary: '#E14C94',
      secondary: '#3A3335',
      title: '#E14C94',
    },
  },
  bouquet: {
    name: 'Bouquet',
    background: {
      primary: '#173F35',
      secondary: '#1F4E43',
    },
    text: {
      primary: '#408E7B',
      secondary: '#DBE0D2',
      title: '#DBE0D2',
    },
  },
};

*/

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
