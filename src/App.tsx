import React from 'react';
import { GlobalStyle, Wrapper, Details, Detail, Date, Location } from './App.styles';
function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Wrapper>
          <div className='container'>
            <Date><span>9:48</span> AM</Date>
            <Date>Friday, 15.10.2021</Date>
            <Details>
              <Detail><p>Humidity</p><p>76%</p></Detail>
              <Detail><p>Pressure</p><p>1020</p></Detail>
              <Detail><p>Wind Speed</p><p>45km/h</p></Detail>
              <Detail><p>Sunrise</p><p>7:00</p></Detail>
              <Detail><p>Sunset</p><p>18:00</p></Detail>
            </Details>
          </div>
          <Location>
            <p>Kraków / Poland</p>
            <p>48.8783E 76.93784N</p>
          </Location>
        </Wrapper>
        <div className="forecast">

        </div>
      </div>
    </>
  );
}

export default App;
