enum DocumenType {
    Passport,
    DriverLicense,
    IDCard
}

//  Интерфейс владельца
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    DocumenType: DocumenType;
    documentSeries: string;
    documentNumber: string;
    displayInfo(): void;
}

//  Класс Owner
class VehicleOwner implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _DocumenType: DocumenType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, 
                DocumenType: DocumenType, documentSeries: string, documentNumber: string) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._DocumenType = DocumenType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }


// Гет_сет
get lastName(): string {
    return this._lastName;
}

set lastName(value: string) {
    this._lastName = value;
}

get firstName(): string {
    return this._firstName;
}

set firstName(value: string) {
    this._firstName = value;
}

get middleName(): string {
    return this._middleName;
}

set middleName(value: string) {
    this._middleName = value;
}

get birthDate(): Date {
    return this._birthDate;
}

set birthDate(value: Date) {
    this._birthDate = value;
}

get DocumenType(): DocumenType {
    return this._DocumenType;
}

set DocumenType(value: DocumenType) {
    this._DocumenType = value;
}

get documentSeries(): string {
    return this._documentSeries;
}

set documentSeries(value: string) {
    this._documentSeries = value;
}

get documentNumber(): string {
    return this._documentNumber;
}

set documentNumber(value: string) {
    this._documentNumber = value;
}


    // Метод для вывода информации о владельце
    displayInfo(): void {
        console.log(
            `Owner: ${this._lastName} ${this._firstName} ${this._middleName}, ` +
            `Born: ${this._birthDate.toLocaleDateString()}, ` +
            `Document: ${this._documentSeries} ${this._documentNumber}, ` +
            `Type: ${this._DocumenType}`
        );
    }
}

//  Интерфейс транспортного средства
interface Vehicle {
    make: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayVehicleInfo(): void;
}

//  Класс Vehicle
class VehicleInfo implements Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    // Гет-сет
get make(): string {
    return this._make;
}

set make(value: string) {
    this._make = value;
}

get model(): string {
    return this._model;
}

set model(value: string) {
    this._model = value;
}

get year(): number {
    return this._year;
}

set year(value: number) {
    this._year = value;
}

get vin(): string {
    return this._vin;
}

set vin(value: string) {
    this._vin = value;
}

get registrationNumber(): string {
    return this._registrationNumber;
}

set registrationNumber(value: string) {
    this._registrationNumber = value;
}

get owner(): Owner {
    return this._owner;
}

set owner(value: Owner) {
    this._owner = value;
}

    // Метод для вывода информации о транспортном средстве
    displayVehicleInfo(): void {
        console.log(
            `Vehicle: ${this._make} ${this._model} (${this._year}), ` +
            `VIN: ${this._vin}, Registration: ${this._registrationNumber}`
        );
    }
}

// 2. Перечисление тип кузова
enum BodyType {
    Sedan,
    SUV,
    Hatchback,
    Coupe
}

// 2. Перечисление класса автомобиля
enum CarClass {
    Economy,
    Standard,
    Luxury
}

// 2. Интерфейс автомобиля
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

// 2. Класс Car
class CarInfo extends VehicleInfo implements Car {
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, 
                owner: Owner, bodyType: BodyType, carClass: CarClass) {
        super(make, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    // Гет_сет
    get bodyType(): BodyType {
        return this._bodyType;
    }

    get carClass(): CarClass {
        return this._carClass;
    }
    set bodyType(value: BodyType) {
        this._bodyType = value;
    }
    set carClass(value: CarClass) {
        this._carClass = value;
    }

    // Метод для вывода информации о транспортном средстве
    displayVehicleInfo(): void {
        super.displayVehicleInfo();
        console.log(`Body Type: ${BodyType[this._bodyType]}, Class: ${CarClass[this._carClass]}`);
    }
}

//  Интерфейс мотоцикла
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

//  Класс Motorbike
class MotorbikeInfo extends VehicleInfo implements Motorbike {
    private _frameType: string;
    private _isSport: boolean;

    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, 
                owner: Owner, frameType: string, isSport: boolean) {
        super(make, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }

    // Гет_сет
    get frameType(): string {
        return this._frameType;
    }

    get isSport(): boolean {
        return this._isSport;
    }
    set frameType(value: string) {
        this._frameType = value;
    }

    set isSport(value: boolean) {
        this._isSport = value;
    }

    // вывод инофрмации о транспорте
    displayVehicleInfo(): void {
        super.displayVehicleInfo();
        console.log(`Frame Type: ${this._frameType}, Is Sport: ${this._isSport}`);
    }
}

// интерфейс хранилище
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

// Класс хранилища
class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor() {
        this._creationDate = new Date();
        this._vehicles = [];
    }

// Гет_сет
get creationDate(): Date {
    return this._creationDate;
}

set creationDate(value: Date) {
    this._creationDate = value;
}

get vehicles(): T[] {
    return this._vehicles;
}

set vehicles(value: T[]) {
    this._vehicles = value;
}

// Метод для получения всех транспортных средств
getAllVehicles(): T[] {
    return this._vehicles;
}

// Метод для добавления транспортного средства
addVehicle(vehicle: T): void {
    this._vehicles.push(vehicle);
}
}

// Main
const owner = new VehicleOwner("Doe", "John", "Middle", new Date(1990, 1, 1), DocumenType.Passport, "AB1234", "123456");
const car = new CarInfo("Toyota", "Camry", 2020, "DFGHJKLFGHJ1", "ABC123", owner, BodyType.Sedan, CarClass.Luxury);
const motorbike = new MotorbikeInfo("Yamaha", "R1", 2021, "DFGHJKL2", "ABC456", owner, "Sport", true);

const storage = new VehicleStorageImpl<Vehicle>();
storage.addVehicle(car);
storage.addVehicle(motorbike);

console.log("Vehicles в хранилице:");
storage.getAllVehicles().forEach(vehicle => {
    vehicle.displayVehicleInfo();
});