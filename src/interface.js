document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#current-temp').innerText = thermostat.temperature;
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

  document.querySelector('#power-saver-on').addEventListener('click', () => {
    thermostat.turnPowerSaverOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemp();
  });

  document.querySelector('#power-saver-off').addEventListener('click', () => {
    thermostat.turnPowerSaverOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemp();
  });
});