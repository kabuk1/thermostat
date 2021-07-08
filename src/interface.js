document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#set-temp').innerText = thermostat.temperature;
    document.querySelector('#energy-usage').className = thermostat.energyUsage();
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

  document.querySelector('#power-saver').addEventListener('click', () => {
    thermostat.turnPowerSaverOn();
    document.querySelector('#power-saving-status').className = 'badge rounded-pill bg-success';
    updateTemp();
  });

  document.querySelector('#power-saver').addEventListener('click', () => {
    thermostat.turnPowerSaverOff();
    document.querySelector('#power-saving-status').className = 'badge rounded-pill bg-secondary';
    updateTemp();
  });

  // Time and date
  const time = new Date();
  document.querySelector("#current-time").innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const date = new Date();
  document.querySelector("#current-date").innerHTML = date.toDateString();
  
});
