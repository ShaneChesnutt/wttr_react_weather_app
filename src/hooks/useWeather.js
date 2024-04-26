import { useEffect, useState } from "react";

const WTTR_URL = "https://wttr.in";

export default function useWeather(search) {
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const getWeatherForecast = async () => {
      setIsLoading(true);
      setLocation(null);
      const url = new URL(search, WTTR_URL);
      url.searchParams.set("format", "j1");
      const response = await fetch(url);
      const data = await response.json();
      const { current, area, forecast } = forecastDataParser(data);

      setLocation(area);
      setCurrentWeather(current);
      setForecast(forecast);
      setIsLoading(false);
    };

    getWeatherForecast();
  }, [search]);

  return { isLoading, forecast, location, currentWeather };
}

function forecastDataParser(data) {
  const current = parseCurrentWeather(data);
  const location = parseLocation(data);
  const forecast = parseForecast(data);

  return {
    current,
    forecast: forecast,
    area: location,
  };
}

function parseCurrentWeather({ current_condition }) {
  const current = current_condition[0];

  const currentTime = new Date(current.localObsDateTime).getHours();
  const night = currentTime >= 21 || currentTime <= 7;

  return {
    code: current.weatherCode,
    night,
    description: current.weatherDesc[0].value,
    temperature: {
      fahrenheit: current.temp_F,
      celsius: current.temp_C,
    },
    feelsLike: {
      fahrenheit: current.FeelsLikeF,
      celsius: current.FeelsLikeC,
    },
    wind: {
      direction: current.winddir16Point,
      mph: current.windspeedMiles,
      kmph: current.windspeedKmph,
    },
    precipitation: {
      inches: current.precipInches,
      milimeters: current.precipMM,
    },
  };
}

function parseLocation({ nearest_area }) {
  const data = nearest_area[0];

  return {
    name: data.areaName[0].value,
    region: data.region[0].value,
    country: data.country[0].value,
  };
}

function parseForecast({ weather }) {
  const forecast = weather;

  return forecast.map((day) => {
    return {
      date: day.date,
      maxTemperature: {
        fahrenheit: day.maxtempF,
        celsius: day.maxtempC,
      },
      minTemperature: {
        fahrenheit: day.mintempF,
        celsius: day.mintempC,
      },
      avgTemperature: {
        fahrenheit: day.avgtempF,
        celsius: day.avgtempC,
      },
      hourly: parseHourlyForecast(day.hourly),
    };
  });
}

function parseHourlyForecast(hourly) {
  const timeOfDay = {
    900: "Morning",
    1200: "Noon",
    1800: "Evening",
    2100: "Night",
  };

  return hourly
    .filter((forecast) =>
      ["900", "1200", "1800", "2100"].includes(forecast.time),
    )
    .map((forecast) => {
      return {
        timeOfDay: timeOfDay[forecast.time],
        night: timeOfDay[forecast.time] === "Night",
        ...parseWeather(forecast),
      };
    });
}

function parseWeather(forecast) {
  return {
    code: forecast.weatherCode,
    description: forecast.weatherDesc[0].value,
    temperature: {
      fahrenheit: forecast.tempF,
      celsius: forecast.tempC,
    },
    feelsLike: {
      fahrenheit: forecast.FeelsLikeF,
      celsius: forecast.FeelsLikeC,
    },
    wind: {
      direction: forecast.winddir16Point,
      mph: forecast.windspeedMiles,
      kmph: forecast.windspeedKmph,
    },
    precipitation: {
      inches: forecast.precipInches,
      milimeters: forecast.precipMM,
    },
  };
}
