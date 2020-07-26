import React from 'react';
import Map from './map';
import '../App.css'

const App = () => {
  return (
    <view>
      <div id="headerContainer">
        <h1 id="dashboardName">Coronavirus US County Tracker</h1>
      </div> 
      <div class="side">Test</div>
      <div id="dashboardMap"><Map></Map></div>
      <div class="side">Test 2</div>
        
    </view>
           
  )
}

export default App;
