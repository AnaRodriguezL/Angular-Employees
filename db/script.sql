CREATE DATABASE IF NOT EXISTS employees_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identification INT(10) NOT NULL,
    names VARCHAR(50) NOT NULL,
    surnames VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'employee') NOT NULL,
    date_of_birth DATE,
    address VARCHAR(255),
    mobile_phone VARCHAR(20),
    vaccination_status ENUM('Vaccinated', 'Not vaccinated'),
    vaccine_type ENUM('Sputnik', 'AstraZeneca', 'Pfizer', 'Johnson&Johnson'),
    vaccination_date DATE,
    dose_number INT
);

INSERT INTO employees (identification, names, surnames, email, username, password, role, date_of_birth, address, mobile_phone, vaccination_status, vaccine_type, vaccination_date, dose_number)
VALUES
  (123456789, 'John', 'Doe', 'johndoe@example.com', 'johndoe', 'password123', 'admin', '1990-05-15', '123 Main St, Anytown', '555-1234', 'Vaccinated', 'Pfizer', '2023-03-15', 2),
  (987654321, 'Jane', 'Smith', 'janesmith@example.com', 'janesmith', 'password456', 'employee', '1985-08-20', '456 Elm St, Othertown', '555-5678', 'Not vaccinated', NULL, NULL, NULL),
  (456789012, 'Michael', 'Johnson', 'michaeljohnson@example.com', 'michaelj', 'password789', 'employee', '1988-12-10', '789 Oak St, Anycity', '555-9012', 'Vaccinated', 'Johnson&Johnson', '2023-04-25', 1),
  (789012345, 'Emily', 'Brown', 'emilybrown@example.com', 'emilyb', 'passwordabc', 'admin', '1995-02-28', '321 Pine St, Othercity', '555-3456', 'Not vaccinated', NULL, NULL, NULL);