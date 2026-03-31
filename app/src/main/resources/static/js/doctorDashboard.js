import { getAllAppointments } from './services/appointmentRecordService.js';
import { createPatientRow } from './components/patientRows.js';

let selectedDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
let token = localStorage.getItem('token');
let patientName = null;

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('patientTableBody');
    const datePicker = document.getElementById('datePicker');
    
    // Set default date in picker
    if(datePicker) datePicker.value = selectedDate;

    // Search Logic
    document.getElementById('searchBar').addEventListener('input', (e) => {
        patientName = e.target.value || "null";
        loadAppointments();
    });

    // Filter Logic
    document.getElementById('todayButton').addEventListener('click', () => {
        selectedDate = new Date().toISOString().split('T')[0];
        datePicker.value = selectedDate;
        loadAppointments();
    });

    datePicker.addEventListener('change', (e) => {
        selectedDate = e.target.value;
        loadAppointments();
    });

    loadAppointments();
});

async function loadAppointments() {
    const tableBody = document.getElementById('patientTableBody');
    tableBody.innerHTML = "";

    try {
        const appointments = await getAllAppointments(selectedDate, patientName, token);
        
        if (!appointments || appointments.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No Appointments found for today</td></tr>";
            return;
        }

        appointments.forEach(appo => {
            const row = createPatientRow(appo);
            tableBody.appendChild(row);
        });
    } catch (error) {
        tableBody.innerHTML = "<tr><td colspan='5'>Error loading appointments.</td></tr>";
    }
}