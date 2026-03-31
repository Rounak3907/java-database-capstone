/**
 * header.js
 * Dynamically renders the navigation header based on userRole and login token.
 */

function renderHeader() {
    const headerDiv = document.getElementById("header");
    if (!headerDiv) return;

    // 1. Reset logic for Homepage
    if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) {
        localStorage.removeItem("userRole");
        localStorage.removeItem("token");
    }

    const role = localStorage.getItem("userRole");
    const token = localStorage.getItem("token");

    // 2. Session Validation
    if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
        localStorage.removeItem("userRole");
        alert("Session expired or invalid login. Please log in again.");
        window.location.href = "/";
        return;
    }

    // 3. Build Header Content
    let headerContent = `<div class="nav-container">
                            <h1 onclick="window.location.href='/'" style="cursor:pointer">ClinicSystem</h1>
                            <nav class="nav-links">`;

    if (role === "admin") {
        headerContent += `
            <button id="addDocBtn" class="adminBtn">Add Doctor</button>
            <a href="#" id="logoutBtn">Logout</a>`;
    } else if (role === "doctor") {
        headerContent += `
            <a href="/pages/doctorDashboard.html">Home</a>
            <a href="#" id="logoutBtn">Logout</a>`;
    } else if (role === "patient") {
        headerContent += `
            <button id="loginBtn">Login</button>
            <button id="signupBtn">Sign Up</button>`;
    } else if (role === "loggedPatient") {
        headerContent += `
            <a href="/pages/patientDashboard.html">Home</a>
            <a href="/pages/appointments.html">Appointments</a>
            <a href="#" id="logoutPatientBtn">Logout</a>`;
    }

    headerContent += `</nav></div>`;
    headerDiv.innerHTML = headerContent;

    // 4. Attach Listeners
    attachHeaderButtonListeners();
}

function attachHeaderButtonListeners() {
    const addDocBtn = document.getElementById("addDocBtn");
    if (addDocBtn) addDocBtn.addEventListener("click", () => openModal('addDoctor'));

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", logout);

    const logoutPatientBtn = document.getElementById("logoutPatientBtn");
    if (logoutPatientBtn) logoutPatientBtn.addEventListener("click", logoutPatient);
}

function logout() {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    window.location.href = "/";
}

function logoutPatient() {
    localStorage.removeItem("token");
    localStorage.setItem("userRole", "patient");
    window.location.href = "/pages/patientDashboard.html";
}

// Initial Call
document.addEventListener("DOMContentLoaded", renderHeader);