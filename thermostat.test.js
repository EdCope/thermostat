const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  describe('getTemperature', () => {
    it('the default temperature is 20', () => {
      thermostat = new Thermostat;
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('up', () => {
    it('turns up the temperature by 1', () => {
      thermostat = new Thermostat;
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    })
  })

  describe('down', () => {
    it('turns down the temperature by 1', () => {
      thermostat = new Thermostat;
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    })

    it('has minimum temperature of 10', () => {
      thermostat = new Thermostat;
      for (let i = 0 ; i < 11 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    })
  })

  describe('setPowerSavingMode', () => {
    it('power saving mode starts off', () => {
      thermostat = new Thermostat;
      expect(thermostat.pSave).toBe(false);
    })

    it('sets the powersaving mode on', () => {
      thermostat = new Thermostat;
      thermostat.setPowerSavingMode(true);
      expect(thermostat.pSave).toBe(true);
    })
    
    it('when psm is on max temp is 25', () => {
      thermostat = new Thermostat;
      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('when psm is off max temp is 32', () => {
      thermostat = new Thermostat;
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 13 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    })

  })

  describe('reset', () => {
    it('resets the thermostat to 20', () => {
      thermostat = new Thermostat;
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('energyStatus', () => {
    it('returns the energy status', () => {
      thermostat = new Thermostat;
      for (let i = 0 ; i < 3 ; i++) {
        thermostat.down();
      }
      expect(thermostat.energyStatus()).toBe('low-usage');
      for (let i = 0 ; i < 4 ; i++) {
        thermostat.up();
      }
      expect(thermostat.energyStatus()).toBe('medium-usage');
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.up();
      }
      expect(thermostat.energyStatus()).toBe('high-usage');
    })
  })

})