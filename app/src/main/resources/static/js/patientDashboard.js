import { createDoctorCard } from './components/doctorCard.js';
import { openModal } from './components/modals.js';
import { getDoctors, filterDoctors } from './services/doctorServices.js';
import { patientLogin, patientSignup } from './services/patientServices.js';

document.addEventListener("DOMContentLoaded", () => {
    loadDoctorCards();

    // Modal Triggers
    document.getElementById("patientSignup")?.addEventListener("click", () => openModal("patientSignup"));
    document.getElementById("patientLogin")?.addEventListener("click", () => openModal("patientLogin"));

    // Filters
    document.getElementById("searchBar").addEventListener("input", filterDoctorsOnChange);
    document.getElementById("filterTime").addEventListener("change", filterDoctorsOnChange);
    document.getElementById("filterSpecialty").addEventListener("change", filterDoctorsOnChange);
});

async function loadDoctorCards() {
    const doctors = await getDoctors();
    renderDoctorCards(doctors);
}

async function filterDoctorsOnChange() {
    const name = document.getElementById("searchBar").value;
    const time = document.getElementById("filterTime").value;
    const specialty = document.getElementById("filterSpecialty").value;

    const doctors = await filterDoctors(name, time, specialty);
    renderDoctorCards(doctors);
}

function renderDoctorCards(doctors) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = doctors.length > 0 
        ? "" 
        : "<p>No doctors found with the given filters.</p>";

    doctors.forEach(doc => {
        contentDiv.appendChild(createDoctorCard(doc));
    });
}

window.signupPatient = async function () {
    const data = {
        name: document.getElementById('signupName').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        phone: document.getElementById('signupPhone').value,
        address: document.getElementById('signupAddress').value
    };

    const res = await patientSignup(data);
    if (res.success) {
        alert("Signup successful!");
        location.reload();
    } else {
        alert(res.message);
    }
};

window.loginPatient = async function () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await patientLogin({ email, password });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = "loggedPatientDashboard.html";
        } else {
            alert("Invalid Login Credentials");
        }
    } catch (err) {
        alert("Login failed");
    }
};