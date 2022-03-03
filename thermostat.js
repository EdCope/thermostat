class Thermostat {
  constructor(){
    this.temperature = 20;
    this.pSave = false;
  }
  
  getTemperature() {
    return this.temperature;
  }

  reset() {
    this.temperature = 20;
  }

  up() {
    if(this.pSave === true){
      if(this.temperature < 25){
        this.temperature += 1;
      } 
    }else{
      if(this.temperature < 32){
        this.temperature += 1;
      } 
    }
    
  }

  down() {
    if(this.temperature > 10){
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(value) {
    if(value === true){
      this.pSave = true;
    } else {
      this.pSave = false;
    }
     
  }

  energyStatus() {
    if(this.temperature < 18 ){
      return 'low-usage';
    }else if(this.temperature > 18 && this.temperature <= 25){
      return 'medium-usage';
    }else{
      return 'high-usage';
    }
  }

}

module.exports = Thermostat