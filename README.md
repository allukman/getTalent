# Get-Talent

A simple REST API using Node js, Express JS and DBMS MySQL

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. Node Js
2. Node_modules
3. Postman
4. Web Server
5. Visual Studio Code

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name db_wjobsid, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url (http://localhost:3000/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on code editor, and copy paste this code below :

```
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = 
DB_DATABASE = get_talent

PORT = 3000

JWT_KEY = ARKA123