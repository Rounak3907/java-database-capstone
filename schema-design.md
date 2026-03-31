MySQL Database Design

MongoDB Collection Design


## MySQL Database Design : The core operational data of the clinic is stored in MySQL to ensure data integrity and support complex relationships.


1. Table: patients
id: INT, Primary Key, Auto Increment

name: VARCHAR(100), Not Null

email: VARCHAR(100), Unique, Not Null

phone: VARCHAR(20)

date_of_birth: DATE


2. Table: doctors
id: INT, Primary Key, Auto Increment

name: VARCHAR(100), Not Null

specialization: VARCHAR(100)

consultation_fee: DECIMAL(10,2)


3. Table: appointments
id: INT, Primary Key, Auto Increment

doctor_id: INT, Foreign Key → doctors(id)

patient_id: INT, Foreign Key → patients(id)

appointment_time: DATETIME, Not Null

status: INT (0 = Scheduled, 1 = Completed, 2 = Cancelled)


4. Table: admin
id: INT, Primary Key, Auto Increment

username: VARCHAR(50), Unique, Not Null

password: VARCHAR(255), Not Null (Stored as Hash)


## MongoDB Collection Design: We use MongoDB for prescriptions because medical notes and pharmacy details can vary significantly in structure and length for each patient.

{
  "_id": "ObjectId('64abc123456')",
  "patientName": "John Smith",
  "appointmentId": 101,
  "medication": [
    {
      "name": "Amoxicillin",
      "dosage": "500mg",
      "frequency": "Thrice a day"
    }
  ],
  "doctorNotes": "Finish the full course of antibiotics even if feeling better.",
  "issuedDate": "2024-05-20",
  "pharmacy": {
    "name": "City Health Pharmacy",
    "location": "Downtown Branch"
  }
}
