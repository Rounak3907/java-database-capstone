/**
 * doctorCard.js
 * Reusable component for Doctor Info Cards.
 */

// Note: Imports for deleteDoctor and getPatientData would be added here in the next lab
// import { deleteDoctor } from '../services/doctorServices.js';
// import { getPatientData } from '../services/patientServices.js';

export function createDoctorCard(doctor) {
    const card = document.createElement("div");
    card.classList.add("doctor-card");

    const role = localStorage.getItem("userRole");

    // 1. Doctor Info Section
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("doctor-info");

    const name = document.createElement("h3");
    name.textContent = `Dr. ${doctor.name}`;

    const specialization = document.createElement("p");
    specialization.innerHTML = `<strong>Specialty:</strong> ${doctor.specialty}`;

    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> ${doctor.email}`;

    const availability = document.createElement("p");
    // Assuming availability is an array of times
    availability.innerHTML = `<strong>Availability:</strong> ${doctor.availability.join(", ")}`;

    infoDiv.appendChild(name);
    infoDiv.appendChild(specialization);
    infoDiv.appendChild(email);
    infoDiv.appendChild(availability);

    // 2. Button Container
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card-actions");

    // 3. Conditional Actions Based on Role
    if (role === "admin") {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.classList.add("delete-btn");
        removeBtn.addEventListener("click", async () => {
            if (confirm(`Are you sure you want to remove Dr. ${doctor.name}?`)) {
                // Future implementation:
                // const token = localStorage.getItem("token");
                // await deleteDoctor(doctor.id, token);
                card.remove(); 
            }
        });
        actionsDiv.appendChild(removeBtn);

    } else if (role === "patient") {
        const bookNow = document.createElement("button");
        bookNow.textContent = "Book Now";
        bookNow.addEventListener("click", () => {
            alert("Please login first to book an appointment.");
        });
        actionsDiv.appendChild(bookNow);

    } else if (role === "loggedPatient") {
        const bookNow = document.createElement("button");
        bookNow.textContent = "Book Now";
        bookNow.addEventListener("click", async (e) => {
            const token = localStorage.getItem("token");
            // Future implementation:
            // const patientData = await getPatientData(token);
            // showBookingOverlay(e, doctor, patientData);
            console.log("Opening booking for:", doctor.name);
        });
        actionsDiv.appendChild(bookNow);
    }

    // 4. Assembly
    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    return card;
}