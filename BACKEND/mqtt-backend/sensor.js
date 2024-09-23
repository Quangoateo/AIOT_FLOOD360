const mqtt = require("mqtt");

// Connect to the MQTT broker (use your broker's URL)
const client = mqtt.connect("mqtt://test.mosquitto.org"); // Example broker

// Mock data generator
function generateMockData(flood) {
  let data = {
    date: new Date().toLocaleDateString("en-CA"), // Format as YYYY-MM-DD
    wdir: (Math.random() * 360).toFixed(0), // Wind direction between 21.0 and 349.0 degrees
  };

  switch (flood) {
    case 1:
      data.tavg = (Math.random() * (29.0 - 2.6) + 2.6).toFixed(1); // Temperature between 2.6 and 29.0 °C
      data.prcp = (Math.random() * (98.6 - 0.0) + 0.0).toFixed(1); // Precipitation between 0.0 and 98.6 mm
      data.wspd = (Math.random() * (19.1 - 2.8) + 2.8).toFixed(2); // Wind speed between 2.8 and 19.1 m/s
      data.pres = (Math.random() * (1029.6 - 1002.0) + 1002.0).toFixed(1); // Pressure between 1002.0 and 1029.6 hPa
      data.river_discharge = (Math.random() * (2869.78 - 9.3) + 9.3).toFixed(2); // River discharge between 9.3 and 2869.78 m³/s
      break;
    case 2:
      data.tavg = (Math.random() * (29.0 - 10.0) + 10.0).toFixed(1);
      data.prcp = (Math.random() * (98.6 - 30.0) + 30.0).toFixed(1);
      data.wspd = (Math.random() * (19.1 - 12.0) + 12.0).toFixed(2);
      data.pres = (Math.random() * (1029.6 - 1007.0) + 1007.0).toFixed(1);
      data.river_discharge = (Math.random() * (2000.0 - 500.0) + 500.0).toFixed(
        2
      );
      break;
    case 3:
      data.tavg = (Math.random() * (25.0 - 15.0) + 15.0).toFixed(1);
      data.prcp = (Math.random() * (98.6 - 50.0) + 50.0).toFixed(1);
      data.wspd = (Math.random() * (19.1 - 15.0) + 15.0).toFixed(2);
      data.pres = (Math.random() * (1029.6 - 1012.0) + 1012.0).toFixed(1);
      data.river_discharge = (Math.random() * (1000.0 - 100.0) + 100.0).toFixed(
        2
      );
      break;
    case 4:
      data.tavg = (Math.random() * (20.0 - 10.0) + 10.0).toFixed(1);
      data.prcp = (Math.random() * (98.6 - 70.0) + 70.0).toFixed(1);
      data.wspd = (Math.random() * (19.1 - 17.0) + 17.0).toFixed(2);
      data.pres = (Math.random() * (1029.6 - 1020.0) + 1020.0).toFixed(1);
      data.river_discharge = (Math.random() * (500.0 - 50.0) + 50.0).toFixed(2);
      break;
    case 5:
      data.tavg = (Math.random() * (15.0 - 5.0) + 5.0).toFixed(1);
      data.prcp = (Math.random() * (98.6 - 90.0) + 90.0).toFixed(1);
      data.wspd = (Math.random() * (19.1 - 18.0) + 18.0).toFixed(2);
      data.pres = (Math.random() * (1029.6 - 1025.0) + 1025.0).toFixed(1);
      data.river_discharge = (Math.random() * (50.0 - 9.3) + 1950).toFixed(2);
      break;
    default:
      console.log("Invalid flood level");
      return null;
  }

  return data;
}

// Publish data every 10 seconds
client.on("connect", () => {
  console.log("Connected to MQTT broker");

  setInterval(() => {
    const data = generateMockData(5);
    const dataString = JSON.stringify(data);

    client.publish("sensor/data", dataString); // Publish to 'sensor/data' topic
    console.log("Data sent:", dataString);
  }, 1000);
});
