Angular-Spring Boot CRUD Application

This repository contains an Angular frontend and a Spring Boot backend, each operating as independent applications but connected via APIs. The application facilitates CRUD (Create, Read, Update, Delete) operations and utilizes PostgreSQL as the database management system with Spring Data JPA for database connectivity.
Features

    Angular Frontend:
        Provides a user-friendly interface for interacting with the application.
        Implements CRUD functionalities for managing data.
        Incorporates Angular Material or any other UI library for enhanced design and user experience.

    Spring Boot Backend:
        Offers RESTful APIs to handle CRUD operations.
        Utilizes Spring Data JPA for seamless database interaction.
        Implements robust error handling and validation.
        Incorporates Spring Security for authentication and authorization if required.

Prerequisites

Before running the applications, ensure you have the following installed:

    Node.js and npm (for Angular)
    Java Development Kit (JDK) and Maven (for Spring Boot)
    PostgreSQL database

Setup Instructions
Frontend (Angular)

    Clone the repository:

    bash

git clone https://github.com/your-username/angular-springboot-crud.git

Navigate to the frontend directory:

bash

cd angular-springboot-crud/frontend

Install dependencies:

bash

npm install

Run the Angular application:

bash

    ng serve

    The application will be available at http://localhost:4200.

Backend (Spring Boot)

    Navigate to the backend directory:

    bash

cd angular-springboot-crud/backend

Update application.properties with your PostgreSQL database configuration:

properties

spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password

Build and run the Spring Boot application:

bash

    mvn spring-boot:run

    The backend will be available at http://localhost:8080.

Usage

    Access the Angular frontend at http://localhost:4200 to perform CRUD operations on your data.
    The frontend communicates with the Spring Boot backend via RESTful APIs.
