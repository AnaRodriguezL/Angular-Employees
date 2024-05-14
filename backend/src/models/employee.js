class Employee {
    constructor(employee) {
        this.id = employee.id;
        this.identification = employee.identification;
        this.names = employee.names;
        this.surnames = employee.surnames;
        this.email = employee.email;
        this.username = employee.username;
        this.password = employee.password;
        this.role = employee.role;
        this.dateOfBirth = employee.dateOfBirth;
        this.address = employee.address;
        this.mobilePhone = employee.mobilePhone;
        this.vaccinationStatus = employee.vaccinationStatus;
        this.vaccineType = employee.vaccineType;
        this.vaccinationDate = employee.vaccinationDate;
        this.doseNumber = employee.doseNumber;
    }
}

module.exports = Employee;