# Cities-weather
 Display Weather status in 3 cities


1. Develop a web application that allows the user to see on the screen the current weather in the below three cities:
    Tel Aviv
    New York
    Paris
•	node.js is the choosen web language 

2. The app source code shall be on Github, and will run locally on your computer via docker.

The task expected artifacts:
1. Link to github to see the code
2. YouTube video - private - where you show the application and the technology you used



---------------------------------------------------------------------------------------------------
dockers commands:

#running in background (-d)
docker run -d -p 9000:5000 node-weather-cities

#activate changes OTF - in windows - (AI - update with relative path)
docker run -it -p 9001:5000 -v C:\Code\NodeJS\Cities-weather:/app node-weather-cities
