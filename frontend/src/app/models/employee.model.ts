export type VaccineType = 'Sputnik' | 'AstraZeneca' | 'Pfizer' | 'Johnson&Johnson';

export interface Employee {
    id: number;
    identification: number;
    names: string;
    surnames: string;
    email: string;
    username: string;
    password: string;
    role: 'admin' | 'employee';
    dateOfBirth: Date;
    address: string;
    mobilePhone: string;
    vaccinationStatus: 'Vaccinated' | 'Not vaccinated';
    vaccineType?: VaccineType;
    vaccinationDate?: Date;
    doseNumber?: number;
}