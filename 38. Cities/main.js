"use strict";
//  Describe_city Fucntion
function describe_city(cityName, country = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
}
// Result
describe_city('Multan', 'Pakistan');
describe_city('Tehran', 'Iran');
describe_city('Mumbia');
