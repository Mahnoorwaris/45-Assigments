function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const car = storeCarInfo('Ford', '2023 F-150 Lightning® LARIAT', {color: 'blue'}, {features: ['360-Degree Camera', 'Power Tailgate with Unique Signature Rear Lighting']});
console.log(car);