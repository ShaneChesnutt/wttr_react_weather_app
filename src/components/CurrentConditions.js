import { Container } from "@mui/system";
import { Typography, Card, CardContent, Divider } from "@mui/material";
import ConditionIcon from "./ConditionIcon";

function CurrentConditions({ weather }) {
  return (
    <Container component="section" sx={{ mb: 4 }}>
      <Typography variant="h3" component="h3">
        Current Conditions
      </Typography>
      {weather ? (
        <Card component="article" sx={{ mt: 2 }}>
          <CardContent
            component="section"
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Typography
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ConditionIcon
                condition={weather.description}
                night={weather.night}
                weatherCode={weather.code}
              />
              <p>{weather.description}</p>
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Temperature:</h3>
              <h2>{weather.temperature.fahrenheit}°F</h2>
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Feels Like:</h3>
              <h2>{weather.feelsLike.fahrenheit}°F</h2>
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Wind:</h3>
              <h2>
                {weather.wind.mph} mph {weather.wind.direction}
              </h2>
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </Container>
  );
}

export default CurrentConditions;
