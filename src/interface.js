document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#set-temp').innerText = thermostat.temperature;
    document.querySelector('#set-temp').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemp();

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.up();
    updateTemp();
  });

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.down();
    updateTemp();
  });

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemp();
  });

  document.querySelector('#power-saving-status').addEventListener('click', () => {
    thermostat.turnPowerSaverOn();
    document.querySelector('#power-saving-status').innerHTML = 'ON';
    updateTemp();
  });

  document.querySelector('#power-saving-status').addEventListener('click', () => {
    thermostat.turnPowerSaverOff();
    document.querySelector('#power-saving-status').innerHTML = 'OFF';
    updateTemp();
  });

  // Time and date
  const time = new Date();
  document.querySelector("#current-time").innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const date = new Date();
  document.querySelector("#current-date").innerHTML = date.toDateString();
  
});
