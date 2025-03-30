# DashBoard Structure
```
components/
│── Body.jsx
│  ├── Search.jsx
│  ├── CurrenWeather
│      ├── CurrentWeatherContainer.jsx
│          ├── WeatherInfo.jsx
│          ├── WeatherStatsContainer.jsx
│              ├── WeatherDetailCard.jsx
│  ├── ForeCastSection
│      ├── WeatherForeCastContainer
│          ├── ForeCastCard
        
```
```
                                    Current Weather Container                   ForeCast Section
                             ------------------------------------------------------------------------------
                            |                                      |                                       |
                            |                                      |                                       |
                            |                                      |                                       |
                            |                                      |            Weather ForeCast           |
                            |                                      |              Container 1              |
                            |             Search                   |         3 hour weather data           |
                            |           Weather Info               |                                       |
                            |                                      | ------------------------------------- |
                            |                                      |                                       |
                            |                                      |                                       |
Shimmer(Loading Icon) ===>  |                                      |                                       | ====> if (error) Error Page
                            |                                      |            Weather ForeCast           |
                            | ------------------------------------ |              Container 2              |
                            |                                      |            5 day weather data         |
                            |                                      |                                       |
                            |                                      |                                       |
                            |                                      |                                       |
                            |                                      | ------------------------------------- |
                            |                                      |                                       |
                            |          WeatherStats                |                                       |
                            |                                      |           Weather ForeCast            |
                            |                                      |            Container 3                |
                            |                                      |           Recent Searches             |
                            |                                      |                                       |
                            |                                      |                                       |    
                             -------------------------------------------------------------------------------
```