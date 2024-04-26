import { Container } from "@mui/system";
import { Typography, Card, CardContent } from "@mui/material";
import ConditionIcon from "./ConditionIcon";

function Forecast({ forecast }) {
  console.log(forecast);
  return (
    <Container component="section">
      <Typography variant="h3" component="h3">
        Forecast
      </Typography>
      {forecast
        ? forecast.map((day) => {
            return (
              <Card component="article" key={day.date} sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h4" component="h4">
                    {new Date(day.date + "T00:00:00").toDateString()}
                  </Typography>
                  <Typography component="span">
                    <p>Average: {day.avgTemperature.fahrenheit}°F</p>
                    <p>High: {day.maxTemperature.fahrenheit}°F</p>
                    <p>Low: {day.minTemperature.fahrenheit}°F</p>
                  </Typography>
                  <Typography variant="h5" component="h5">
                    Hourly
                  </Typography>
                  <Container sx={{ display: "flex", flexWrap: "wrap" }}>
                    {day.hourly.map((hourForecast) => {
                      return (
                        <Card
                          key={hourForecast.timeOfDay}
                          sx={{ mt: 1, mr: 0.5, ml: 0.5, flexGrow: 1 }}
                        >
                          <CardContent>
                            <Typography variant="h6" component="h6">
                              {hourForecast.timeOfDay}
                            </Typography>
                            <Typography component="div">
                              <div>
                                <ConditionIcon
                                  condition={hourForecast.description}
                                  night={hourForecast.night}
                                  weatherCode={hourForecast.code}
                                />
                                <p>{hourForecast.description}</p>
                              </div>
                              <div>
                                <p>
                                  Temperature:{" "}
                                  {hourForecast.temperature.fahrenheit}°F
                                </p>
                                <p>
                                  Feels Like:{" "}
                                  {hourForecast.feelsLike.fahrenheit}°F
                                </p>
                                <p>
                                  Wind: {hourForecast.wind.mph} mph{" "}
                                  {hourForecast.wind.direction}
                                </p>
                              </div>
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Container>
                </CardContent>
              </Card>
            );
          })
        : null}
    </Container>
  );
}

export default Forecast;
