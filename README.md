# Cities-weather
 Display Weather status in 3 cities

#running in background (-d)
docker run -d -p 9000:5000 node-weather-cities

#activate changes otf - in windows - need to find the relative path
docker run -it -p 9001:5000 -v C:\Code\NodeJS\Cities-weather:/app node-weather-cities