class Thermostat {
  constructor(defaultTemp = 20) {
    this.DEFAULT_TEMP = defaultTemp;
    this.powerSaver = true;
    this.temperature = this.DEFAULT_TEMP;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMP_PS_ON = 25;
    this.MAXIMUM_TEMP_PS_OFF = 32;
    this.HIGH_ENERGY_USAGE = 26;
    this.MEDIUM_ENERGY_USAGE = 18;
  }

  getCurrentTemp() {
    return this.temperature
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if(this.isPowerSaverOn() === false) {
      return this.temperature === this.MAXIMUM_TEMP_PS_OFF;
    }
    return this.temperature === this.MAXIMUM_TEMP_PS_ON;
  }

  isPowerSaverOn() {
    return this.powerSaver === true;
  }

  turnPowerSaverOff() {
    this.powerSaver = false;
  }

  turnPowerSaverOn() {
    this.powerSaver = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE) {
      return 'badge rounded-pill bg-success';
    } else if (this.temperature < this.HIGH_ENERGY_USAGE) {
      return 'badge rounded-pill bg-warning text-dark';
    } 
      return 'badge rounded-pill bg-danger';
  }
}