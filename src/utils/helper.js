
const API_KEY = import.meta.env.VITE_API_KEY;

export const getCurrentWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message };
    }

    return data;
  } catch (err) {
    return { error: err.message };
  }
};

export const getWindDirection = (deg) => {
  const directions = [
    "north",
    "north-Northeast",
    "northeast",
    "east-Northeast",
    "east",
    "east-Southeast",
    "southeast",
    "south-Southeast",
    "south",
    "south-Southwest",
    "southwest",
    "west-Southwest",
    "west",
    "west-Northwest",
    "northwest",
    "north-Northwest",
    "north",
  ];

  let index = Math.round(deg / 22.5) % 16; // Convert degrees to index
  return directions[index];
};

export const filteredDailyForeCastData = (weatherData) =>
  weatherData.reduce((acc, item) => {
    if (item.dt_txt.includes("00:00:00")) {
      acc.push({
        date:
          item.dt_txt.split(" ")[0].split("-")[2] +
          "-" +
          item.dt_txt.split(" ")[0].split("-")[1], // Extracts only the date part
        temp: item.main.temp,
        icon: item.weather[0].icon,
      });
    }
    return acc;
  }, []);

export const filteredHourlyForeCastData = (weatherData) => {
  const data = [];
  const today = new Date().toISOString().split("T")[0]; // Get today's date (YYYY-MM-DD)

  weatherData.forEach((item) => {
    if (item.dt_txt.startsWith(today)) {
      // Filter only today's data
      data.push({
        time: item.dt_txt.split(" ")[1].split(":")[0] + ":00", // Extract hour
        temp: Math.trunc(item.main.temp),
        icon: item.weather[0].icon,
        data: "",
      });
    }
  });

  return data;
};

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=" +
        API_KEY +
        "&units=metric"
    );
    const json_data = await response.json();

    if (!response.ok) {
      throw new Error(json_data.message || `Error ${response.status}`);
    }

    const dailyForeCastFilteredData = filteredDailyForeCastData(json_data.list);
    const hourlyForeCastFilteredData = filteredHourlyForeCastData(
      json_data.list
    );

    return { dailyForeCastFilteredData, hourlyForeCastFilteredData, error: null };
  } catch (err) {
    console.error("Failed to fetch weather data:", err.message);
    return { dailyForeCastFilteredData: null, hourlyForeCastFilteredData: null, error: err.message }; // Returning an error object for handling in the caller function
  }
};
