/**
 * footer.js
 * Renders a consistent footer across all pages.
 */

function renderFooter() {
    const footer = document.getElementById("footer");
    if (!footer) return;

    footer.innerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h4>ClinicSystem</h4>
                <p>&copy; 2026 Copyright. All rights reserved.</p>
            </div>
            <div class="footer-columns">
                <div class="footer-column">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Press</a>
                </div>
                <div class="footer-column">
                    <h4>Support</h4>
                    <a href="#">Account</a>
                    <a href="#">Help Center</a>
                    <a href="#">Contact</a>
                </div>
                <div class="footer-column">
                    <h4>Legals</h4>
                    <a href="#">Terms</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Licensing</a>
                </div>
            </div>
        </div>
    </footer>`;
}

// Execute on load
renderFooter();