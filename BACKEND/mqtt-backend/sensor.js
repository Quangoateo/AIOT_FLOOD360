const mqtt = require("mqtt");

// Connect to the MQTT broker (use your broker's URL)
const client = mqtt.connect("mqtt://test.mosquitto.org"); // Example broker

// Mock data generator
function generateMockData(flood) {
  if (flood == 1) {
    return {
      tavg: (Math.random() * 10).toFixed(1) + 19,
      prcp: (Math.random() * 5).toFixed(1),
      wdir: (Math.random() * 360).toFixed(0),
      wspd: (Math.random() * 5).toFixed(2) + 15,
      pres: (Math.random() * 1).toFixed(1) + 1000,
      river_discharge: (Math.random() * 1).toFixed(2) + 0.5,
      date: new Date().toISOString(),
    };
  }
}

// Publish data every 10 seconds
client.on("connect", () => {
  console.log("Connected to MQTT broker");

  setInterval(() => {
    const data = generateMockData(1);
    const dataString = JSON.stringify(data);

    client.publish("sensor/data", dataString); // Publish to 'sensor/data' topic
    console.log("Data sent:", dataString);
  }, 1000);
});
