import React from 'react';
import Map from './map';
import '../App.css'

const App = () => {
  return (
    <view>
      <div id="headerContainer">
        <h1 id="dashboardName">Coronavirus US County Tracker</h1>
      </div>
      <Map></Map>
    </view>
           
  )
}

export default App;
