import { getWindDirection } from "../../../../utils/helper";
import WeatherDetailCard from "./WeatherDetailCard";
import { PiThermometer } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { LuWind } from "react-icons/lu";

const WeatherStatsContainer = ({ currentWeatherData }) => {
  if (!currentWeatherData || Object.keys(currentWeatherData).length === 0)
    return;

  const { temp, feelsLike, windSpeed, windGust, humidity, visibility } =
    currentWeatherData;

  const feelLikeDescription =
    temp < feelsLike
      ? "Humidity is making it feel warmer"
      : temp > feelsLike
      ? "Wind is making it feel colder"
      : "Feels just like the actual temperature";

  const windDirection = getWindDirection(windSpeed);
  const windSpeedDescription =
    "Wind is blowing from " + windDirection + ", gust is " + windGust;

  const humidityDescription =
    humidity < 30
      ? "Low, Dry Air"
      : humidity <= 60
      ? "Moderate, Comfortable"
      : "High, Humid";

  return (
    <div className="flex flex-wrap justify-around gap-y-3">
      <WeatherDetailCard
        icon={<PiThermometer />}
        label="FEELS LIKE"
        value={feelsLike}
        unit="°C"
        description={feelLikeDescription}
      />
      <WeatherDetailCard
        icon={<LuWind />}
        label="WIND SPEED"
        value={windSpeed}
        unit="mph"
        description={windSpeedDescription}
      />
      <WeatherDetailCard
        icon={<FaRegEye />}
        label="VISIBILITY"
        value={visibility}
        unit="km"
        description=""
      />
      <WeatherDetailCard
        icon={<WiHumidity />}
        label="HUMIDITY"
        value={humidity}
        unit="%"
        description={humidityDescription}
      />
    </div>
  );
};

export default WeatherStatsContainer;
