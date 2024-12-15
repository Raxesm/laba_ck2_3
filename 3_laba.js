var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DocumenType;
(function (DocumenType) {
    DocumenType[DocumenType["Passport"] = 0] = "Passport";
    DocumenType[DocumenType["DriverLicense"] = 1] = "DriverLicense";
    DocumenType[DocumenType["IDCard"] = 2] = "IDCard";
})(DocumenType || (DocumenType = {}));
//  Класс Owner
var VehicleOwner = /** @class */ (function () {
    function VehicleOwner(lastName, firstName, middleName, birthDate, DocumenType, documentSeries, documentNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._DocumenType = DocumenType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(VehicleOwner.prototype, "lastName", {
        // Гет_сет
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "middleName", {
        get: function () {
            return this._middleName;
        },
        set: function (value) {
            this._middleName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "DocumenType", {
        get: function () {
            return this._DocumenType;
        },
        set: function (value) {
            this._DocumenType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "documentSeries", {
        get: function () {
            return this._documentSeries;
        },
        set: function (value) {
            this._documentSeries = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleOwner.prototype, "documentNumber", {
        get: function () {
            return this._documentNumber;
        },
        set: function (value) {
            this._documentNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    // Метод для вывода информации о владельце
    VehicleOwner.prototype.displayInfo = function () {
        console.log("Owner: ".concat(this._lastName, " ").concat(this._firstName, " ").concat(this._middleName, ", ") +
            "Born: ".concat(this._birthDate.toLocaleDateString(), ", ") +
            "Document: ".concat(this._documentSeries, " ").concat(this._documentNumber, ", ") +
            "Type: ".concat(this._DocumenType));
    };
    return VehicleOwner;
}());
//  Класс Vehicle
var VehicleInfo = /** @class */ (function () {
    function VehicleInfo(make, model, year, vin, registrationNumber, owner) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    Object.defineProperty(VehicleInfo.prototype, "make", {
        // Гет-сет
        get: function () {
            return this._make;
        },
        set: function (value) {
            this._make = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInfo.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInfo.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInfo.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (value) {
            this._vin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInfo.prototype, "registrationNumber", {
        get: function () {
            return this._registrationNumber;
        },
        set: function (value) {
            this._registrationNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInfo.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    // Метод для вывода информации о транспортном средстве
    VehicleInfo.prototype.displayVehicleInfo = function () {
        console.log("Vehicle: ".concat(this._make, " ").concat(this._model, " (").concat(this._year, "), ") +
            "VIN: ".concat(this._vin, ", Registration: ").concat(this._registrationNumber));
    };
    return VehicleInfo;
}());
// 2. Перечисление тип кузова
var BodyType;
(function (BodyType) {
    BodyType[BodyType["Sedan"] = 0] = "Sedan";
    BodyType[BodyType["SUV"] = 1] = "SUV";
    BodyType[BodyType["Hatchback"] = 2] = "Hatchback";
    BodyType[BodyType["Coupe"] = 3] = "Coupe";
})(BodyType || (BodyType = {}));
// 2. Перечисление класса автомобиля
var CarClass;
(function (CarClass) {
    CarClass[CarClass["Economy"] = 0] = "Economy";
    CarClass[CarClass["Standard"] = 1] = "Standard";
    CarClass[CarClass["Luxury"] = 2] = "Luxury";
})(CarClass || (CarClass = {}));
// 2. Класс Car
var CarInfo = /** @class */ (function (_super) {
    __extends(CarInfo, _super);
    function CarInfo(make, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        var _this = _super.call(this, make, model, year, vin, registrationNumber, owner) || this;
        _this._bodyType = bodyType;
        _this._carClass = carClass;
        return _this;
    }
    Object.defineProperty(CarInfo.prototype, "bodyType", {
        // Гет_сет
        get: function () {
            return this._bodyType;
        },
        set: function (value) {
            this._bodyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarInfo.prototype, "carClass", {
        get: function () {
            return this._carClass;
        },
        set: function (value) {
            this._carClass = value;
        },
        enumerable: false,
        configurable: true
    });
    // Метод для вывода информации о транспортном средстве
    CarInfo.prototype.displayVehicleInfo = function () {
        _super.prototype.displayVehicleInfo.call(this);
        console.log("Body Type: ".concat(BodyType[this._bodyType], ", Class: ").concat(CarClass[this._carClass]));
    };
    return CarInfo;
}(VehicleInfo));
//  Класс Motorbike
var MotorbikeInfo = /** @class */ (function (_super) {
    __extends(MotorbikeInfo, _super);
    function MotorbikeInfo(make, model, year, vin, registrationNumber, owner, frameType, isSport) {
        var _this = _super.call(this, make, model, year, vin, registrationNumber, owner) || this;
        _this._frameType = frameType;
        _this._isSport = isSport;
        return _this;
    }
    Object.defineProperty(MotorbikeInfo.prototype, "frameType", {
        // Гет_сет
        get: function () {
            return this._frameType;
        },
        set: function (value) {
            this._frameType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeInfo.prototype, "isSport", {
        get: function () {
            return this._isSport;
        },
        set: function (value) {
            this._isSport = value;
        },
        enumerable: false,
        configurable: true
    });
    // вывод инофрмации о транспорте
    MotorbikeInfo.prototype.displayVehicleInfo = function () {
        _super.prototype.displayVehicleInfo.call(this);
        console.log("Frame Type: ".concat(this._frameType, ", Is Sport: ").concat(this._isSport));
    };
    return MotorbikeInfo;
}(VehicleInfo));
// Класс хранилища
var VehicleStorageImpl = /** @class */ (function () {
    function VehicleStorageImpl() {
        this._creationDate = new Date();
        this._vehicles = [];
    }
    Object.defineProperty(VehicleStorageImpl.prototype, "creationDate", {
        // Гет_сет
        get: function () {
            return this._creationDate;
        },
        set: function (value) {
            this._creationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorageImpl.prototype, "vehicles", {
        get: function () {
            return this._vehicles;
        },
        set: function (value) {
            this._vehicles = value;
        },
        enumerable: false,
        configurable: true
    });
    // Метод для получения всех транспортных средств
    VehicleStorageImpl.prototype.getAllVehicles = function () {
        return this._vehicles;
    };
    // Метод для добавления транспортного средства
    VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
        this._vehicles.push(vehicle);
    };
    return VehicleStorageImpl;
}());
// Main
var owner = new VehicleOwner("Doe", "John", "Middle", new Date(1990, 1, 1), DocumenType.Passport, "AB1234", "123456");
var car = new CarInfo("Toyota", "Camry", 2020, "DFGHJKLFGHJ1", "ABC123", owner, BodyType.Sedan, CarClass.Luxury);
var motorbike = new MotorbikeInfo("Yamaha", "R1", 2021, "DFGHJKL2", "ABC456", owner, "Sport", true);
var storage = new VehicleStorageImpl();
storage.addVehicle(car);
storage.addVehicle(motorbike);
console.log("Vehicles в хранилице:");
storage.getAllVehicles().forEach(function (vehicle) {
    vehicle.displayVehicleInfo();
});
