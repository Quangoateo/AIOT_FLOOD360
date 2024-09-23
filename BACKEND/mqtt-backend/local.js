const mqtt = require("mqtt");

// Connect to the MQTT broker
const client = mqtt.connect("mqtt://test.mosquitto.org");

// Subscribe to the same topic
client.on("connect", () => {
  console.log("Connected to MQTT broker for receiving data");
  client.subscribe("sensor/data");
});

// Handle incoming messages
client.on("message", (topic, message) => {
  if (topic === "sensor/data") {
    const data = JSON.parse(message.toString());
    console.log("Received Data:", data);

    // Display data on console (or integrate with a frontend to display on a webpage)
  }
});
