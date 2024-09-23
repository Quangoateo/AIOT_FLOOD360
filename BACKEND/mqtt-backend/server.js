const mqtt = require('mqtt');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( bodyParser.json());

//connect to the MQTT Broker 
//When connected
//Handle incoming MQTT messages 
//Create an API Endpoints or publishing data to MQTT Topics
//Start the expressJS server 
