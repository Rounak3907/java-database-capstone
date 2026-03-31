import { openModal } from '../components/modals.js';
import { getDoctors, filterDoctors, saveDoctor } from './services/doctorServices.js';
import { createDoctorCard } from './components/doctorCard.js';

window.onload = () => {
    // Event Binding for Add Doctor
    const addDocBtn = document.getElementById('addDocBtn');
    if (addDocBtn) {
        addDocBtn.addEventListener('click', () => openModal('addDoctor'));
    }

    // Search and Filter Listeners
    document.getElementById("searchBar").addEventListener("input", filterDoctorsOnChange);
    document.getElementById("filterTime").addEventListener("change", filterDoctorsOnChange);
    document.getElementById("filterSpecialty").addEventListener("change", filterDoctorsOnChange);

    loadDoctorCards();
};

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
    contentDiv.innerHTML = ""; 

    if (doctors.length === 0) {
        contentDiv.innerHTML = "<p>No doctors found.</p>";
        return;
    }

    doctors.forEach(doc => {
        const card = createDoctorCard(doc);
        contentDiv.appendChild(card);
    });
}

// Global function for the "Add Doctor" form submission
window.adminAddDoctor = async function () {
    const token = localStorage.getItem('token');
    if (!token) {
        alert("Session expired. Please login again.");
        return;
    }

    const doctorData = {
        name: document.getElementById('docName').value,
        specialty: document.getElementById('docSpecialty').value,
        email: document.getElementById('docEmail').value,
        password: document.getElementById('docPassword').value,
        mobileNo: document.getElementById('docMobile').value,
        availabilityTime: document.getElementById('docTime').value
    };

    const response = await saveDoctor(doctorData, token);
    if (response.success) {
        alert("Doctor added successfully!");
        location.reload(); // Refresh list
    } else {
        alert("Error: " + response.message);
    }
};