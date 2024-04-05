//  Describe_city Fucntion
function describe_city(cityName: string, country: string = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
  }
  
  // Result
  describe_city('Multan', 'Pakistan');
  describe_city('Tehran', 'Iran');
  describe_city('Mumbia');