import axios from 'axios';
import { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=50.54&longitude=30.35&current_weather=true'
    ).then(data => {
      setTemperature(data.data.current_weather.temperature);
      console.log(data.data.current_weather.temperature);
    });
  }, []);

  return (
    <div className="weatherContainer">
      <span>
        Сьогодні до {temperature} {'\u2103'}. Приємних покупок)
      </span>
    </div>
  );
}

export default Weather;
