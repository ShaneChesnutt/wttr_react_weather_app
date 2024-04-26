import "./App.css";
import { useState } from "react";
import {
  Box,
  CircularProgress,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import CurrentConditions from "./components/CurrentConditions";
import Forecast from "./components/Forecast";
import useWeather from "./hooks/useWeather";

function App() {
  const [search, setSearch] = useState("");
  const theme = createTheme();

  const { isLoading, forecast, location, currentWeather } = useWeather(search);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <Navbar
          theme={theme}
          location={location}
          search={search}
          setSearch={setSearch}
        />
        {isLoading ? (
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Container>
        ) : (
          <Container component="main" maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
            <CurrentConditions weather={currentWeather} />
            <Forecast forecast={forecast} />
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
