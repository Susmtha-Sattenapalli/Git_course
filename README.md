Project Overview:

The Speaking Clock microservice converts a 24-hour formatted time into words. It can handle both system time and user input time, providing readable outputs like "It's eight thirty-four" for "08:34." Special cases like "00:00" and "12:00" are handled as "It's Midnight" and "It's Midday," respectively.

Requirements:

Java 8 or above
Maven for build and dependency management
Swagger for API documentation (optional but recommended)
JUnit for unit testing

Features:
Convert time to words.
Handle both system time and user-provided time.
Special cases for Midnight (00:00) and Midday (12:00).
Microservice architecture.
Exception handling.
Unit tests for critical components.
Getting Started

Prerequisites:
Make sure you have the following installed on your system:
Java 8 or above
Maven
Git
Git bash


Build and Run the Project
Build the project using Maven
mvn clean install
Run the application
mvn spring-boot:run
The application will start on the default port (usually 8080), But I chose the port of 8082.

API Endpoints:
1. Get Current System Time in Words
Endpoint: /api/time/current
Method: GET


Response:
json

{
    "time": "It's eight thirty four"
}
2. Convert User-Provided Time to Words
Endpoint: /api/time/{hours}:{minutes}
Method: GET
Example: /api/time/11:25

Response:
json

{
    "time": "It's eleven twenty five"
}
3. Display whether it is midday or midnight
Endpoint: localhost:8080/checkTime?time=12:00
Method:GET

Response:
json

{
    "It's Midday"
}
--> Exception Handling is also done for this project.
*Created Custom Excpetion named "InvalidTimeFormatException".
*The Exception occurs and diplay when there is invalid time format like (H:MM // HH:M) and the correct time format should be (HH:MM).


Swagger Documentation:
Swagger is enabled for easy exploration of the API. After starting the application, navigate to the following URL:
http://localhost:8080/swagger-ui.html

Postman:
You can also check yout api endpoints by using postman.
