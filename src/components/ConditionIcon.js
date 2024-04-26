import clearDay from "@bybas/weather-icons/production/fill/all/clear-day.svg";
import clearNight from "@bybas/weather-icons/production/fill/all/clear-night.svg";
import cloudy from "@bybas/weather-icons/production/fill/all/cloudy.svg";
import fog from "@bybas/weather-icons/production/fill/all/fog.svg";
import heavyRain from "@bybas/weather-icons/production/fill/all/rain.svg";
import heavySnow from "@bybas/weather-icons/production/fill/all/snow.svg";
import lightRain from "@bybas/weather-icons/production/fill/all/drizzle.svg";
import lightSleet from "@bybas/weather-icons/production/fill/all/sleet.svg";
import mist from "@bybas/weather-icons/production/fill/all/mist.svg";
import overcast from "@bybas/weather-icons/production/fill/all/overcast.svg";
import overcastNight from "@bybas/weather-icons/production/fill/all/overcast-night.svg";
import partlyCloudy from "@bybas/weather-icons/production/fill/all/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night.svg";
import partlyCloudyDrizzle from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-drizzle.svg";
import partlyCloudyDrizzleNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg";
import partlyCloudyRain from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-rain.svg";
import partlyCloudyRainNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night-rain.svg";
import partlyCloudySleet from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-sleet.svg";
import partlyCloudySleetNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night-sleet.svg";
import partlyCloudySnow from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-snow.svg";
import partlyCloudySnowNight from "@bybas/weather-icons/production/fill/all/partly-cloudy-night-snow.svg";
import snow from "@bybas/weather-icons/production/fill/all/snow.svg";
import thunderStormsRain from "@bybas/weather-icons/production/fill/all/thunderstorms-rain.svg";
import thunderStormsSnow from "@bybas/weather-icons/production/fill/all/thunderstorms-snow.svg";

const conditionIcons = {
  113: clearDay,
  116: partlyCloudy,
  119: cloudy,
  122: overcast,
  143: mist,
  176: lightRain,
  179: partlyCloudySleet,
  182: partlyCloudySleet,
  185: partlyCloudySleet,
  200: thunderStormsRain,
  227: partlyCloudySnow,
  230: heavySnow,
  248: fog,
  260: fog,
  263: partlyCloudyDrizzle,
  266: partlyCloudyDrizzle,
  281: partlyCloudySleet,
  284: partlyCloudySleet,
  293: partlyCloudyRain,
  296: lightRain,
  299: heavyRain,
  302: heavyRain,
  305: heavyRain,
  308: heavyRain,
  311: lightSleet,
  314: lightSleet,
  317: lightSleet,
  320: snow,
  323: snow,
  326: snow,
  329: heavySnow,
  332: heavySnow,
  335: heavySnow,
  338: heavySnow,
  350: lightSleet,
  353: lightRain,
  356: heavyRain,
  359: heavyRain,
  362: lightSleet,
  365: lightSleet,
  368: snow,
  371: heavySnow,
  374: lightSleet,
  377: lightSleet,
  386: thunderStormsRain,
  389: thunderStormsRain,
  392: thunderStormsSnow,
  395: heavySnow,
};

const nightConditionIcons = {
  113: clearNight,
  116: partlyCloudyNight,
  119: cloudy,
  122: overcastNight,
  143: mist,
  176: lightRain,
  179: partlyCloudySleetNight,
  182: partlyCloudySleetNight,
  185: partlyCloudySleetNight,
  200: thunderStormsRain,
  227: partlyCloudySnowNight,
  230: heavySnow,
  248: fog,
  260: fog,
  263: partlyCloudyDrizzleNight,
  266: partlyCloudyDrizzleNight,
  281: partlyCloudySleetNight,
  284: partlyCloudySleetNight,
  293: partlyCloudyRainNight,
  296: lightRain,
  299: heavyRain,
  302: heavyRain,
  305: heavyRain,
  308: heavyRain,
  311: lightSleet,
  314: lightSleet,
  317: lightSleet,
  320: snow,
  323: snow,
  326: snow,
  329: heavySnow,
  332: heavySnow,
  335: heavySnow,
  338: heavySnow,
  350: lightSleet,
  353: lightRain,
  356: heavyRain,
  359: heavyRain,
  362: lightSleet,
  365: lightSleet,
  368: snow,
  371: heavySnow,
  374: lightSleet,
  377: lightSleet,
  386: thunderStormsRain,
  389: thunderStormsRain,
  392: thunderStormsSnow,
  395: heavySnow,
};

function ConditionIcon({ weatherCode, night, condition }) {
  const icon = night
    ? nightConditionIcons[weatherCode]
    : conditionIcons[weatherCode];

  return (
    <>
      <div className="wi-icon">
        <img src={icon} alt={condition} />
      </div>
    </>
  );
}

export default ConditionIcon;
