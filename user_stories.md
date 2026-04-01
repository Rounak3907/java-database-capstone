**Title:**
_As an **Admin**, I want to **log into the portal with my username and password**, so that **I can manage the platform securely**._

**Acceptance Criteria:**
1. User can enter credentials on a login screen.
2. System validates credentials against the MySQL database.
3. User is redirected to the admin dashboard upon success.

**Priority:** High
**Story Points:** 3
**Notes:**
- Ensure passwords are encrypted in the database.

---

**Title:**
_As an **Admin**, I want to **log out of the portal**, so that **I can protect system access from unauthorized users**._

**Acceptance Criteria:**
1. Admin can click a 'Logout' button from the navigation menu.
2. The active session is terminated immediately.
3. User is redirected to the login page.

**Priority:** High
**Story Points:** 1
**Notes:**
- Clear all session-related cookies upon logout.

---

**Title:**
_As an **Admin**, I want to **add doctors to the portal**, so that **the medical staff records remain current**._

**Acceptance Criteria:**
1. Admin can input doctor details including Name and Specialty.
2. The system saves the record to the database correctly.
3. A success message appears after saving.

**Priority:** High
**Story Points:** 5
**Notes:**
- Use form validation for all required fields.

---

**Title:**
_As an **Admin**, I want to **delete a doctor's profile from the portal**, so that **former staff members no longer have access**._

**Acceptance Criteria:**
1. Admin can select a specific doctor to remove.
2. System prompts for confirmation before deletion.
3. The record is removed from the active database list.

**Priority:** Medium
**Story Points:** 3
**Notes:**
- Ensure any linked appointments are handled before deletion.

---

**Title:**
_As an **Admin**, I want to **run a stored procedure in MySQL CLI to get appointments per month**, so that **I can track usage statistics**._

**Acceptance Criteria:**
1. The stored procedure can be called via the command line interface.
2. It outputs the number of appointments grouped by month.
3. Statistics accurately reflect the stored data in the database.

**Priority:** Medium
**Story Points:** 8
**Notes:**
- Procedure name should be GetMonthlyAppointments.

---

**Title:**
_As a **Patient**, I want to **view a list of doctors without logging in**, so that **I can explore my options before registering**._

**Acceptance Criteria:**
1. A 'View Doctors' link is accessible from the landing page.
2. The list displays doctor names, specialties, and bios.
3. No sensitive information or booking options are shown to unauthenticated users.

**Priority:** High
**Story Points:** 3
**Notes:**
- Ensure the data is pulled from the public-facing view of the database.

---

**Title:**
_As a **Patient**, I want to **sign up using my email and password**, so that **I can begin booking appointments**._

**Acceptance Criteria:**
1. Registration form accepts a valid email format and a secure password.
2. System checks for existing email addresses to prevent duplicates.
3. Upon success, a new patient record is created in the database.

**Priority:** High
**Story Points:** 5
**Notes:**
- Implement password strength validation.

---

**Title:**
_As a **Patient**, I want to **log into the portal**, so that **I can manage my bookings securely**._

**Acceptance Criteria:**
1. Login page accepts registered email and password.
2. User is redirected to their personal dashboard.
3. Failed login attempts show a clear error message.

**Priority:** High
**Story Points:** 3
**Notes:**
- Use session tokens to maintain the logged-in state.

---

**Title:**
_As a **Patient**, I want to **log out of the portal**, so that **my account remains secure on shared devices**._

**Acceptance Criteria:**
1. Logout button is visible on the dashboard.
2. Clicking logout clears the user session.
3. Redirect user back to the home page or login screen.

**Priority:** Medium
**Story Points:** 1
**Notes:**
- Ensure the 'Back' button does not re-enter the session.

---

**Title:**
_As a **Patient**, I want to **book an hour-long appointment with a doctor**, so that **I can receive a consultation**._

**Acceptance Criteria:**
1. Patient can select a doctor and an available time slot.
2. System creates an appointment record with a 60-minute duration.
3. The selected time slot is marked as unavailable for others.

**Priority:** High
**Story Points:** 8
**Notes:**
- Integration with the MySQL appointments table is required.

---

**Title:**
_As a **Patient**, I want to **view my upcoming appointments**, so that **I can prepare for my consultations accordingly**._

**Acceptance Criteria:**
1. A 'My Appointments' section is visible on the dashboard.
2. Displays doctor name, date, and time of the visit.
3. List is sorted by date (soonest first).

**Priority:** Medium
**Story Points:** 3
**Notes:**
- Filter out past appointments by default.

- ---

**Title:**
_As a **Doctor**, I want to **log into the portal**, so that **I can manage my appointments and patient schedule**._

**Acceptance Criteria:**
1. Doctor can enter credentials on the login page.
2. System identifies the user role as 'Doctor' upon authentication.
3. User is directed to the Doctor Dashboard.

**Priority:** High
**Story Points:** 3
**Notes:**
- Ensure session security is role-based.

---

**Title:**
_As a **Doctor**, I want to **log out of the portal**, so that **I can protect my data and patient privacy**._

**Acceptance Criteria:**
1. Logout option is easily accessible from the dashboard.
2. The session is destroyed immediately upon clicking logout.
3. User is redirected to the public landing page.

**Priority:** High
**Story Points:** 1
**Notes:**
- Crucial for HIPAA/data privacy compliance.

---

**Title:**
_As a **Doctor**, I want to **view my appointment calendar**, so that **I can stay organized and manage my daily schedule**._

**Acceptance Criteria:**
1. A calendar view displays all confirmed appointments.
2. Each entry shows the patient name and appointment time.
3. Doctor can toggle between daily and weekly views.

**Priority:** High
**Story Points:** 5
**Notes:**
- Sync with the MySQL appointments table.

---

**Title:**
_As a **Doctor**, I want to **mark my unavailability**, so that **patients can only see and book available slots**._

**Acceptance Criteria:**
1. Doctor can select specific dates or times to mark as 'Unavailable'.
2. The system prevents patients from booking during these blocked periods.
3. Blocked slots are visually distinct on the doctor's calendar.

**Priority:** Medium
**Story Points:** 5
**Notes:**
- This should update the 'availability' table in the database.

---

**Title:**
_As a **Doctor**, I want to **update my profile with specialization and contact info**, so that **patients have up-to-date information**._

**Acceptance Criteria:**
1. Profile edit page allows updating specialization, phone, and email.
2. Changes are saved and reflected immediately on the public doctor list.
3. System validates that contact information is in the correct format.

**Priority:** Medium
**Story Points:** 3
**Notes:**
- Include a profile picture upload option if possible.

---

**Title:**
_As a **Doctor**, I want to **view the patient details for upcoming appointments**, so that **I can be prepared for the consultation**._

**Acceptance Criteria:**
1. Clicking an appointment reveals patient history or notes.
2. Information displayed includes patient name and reason for visit.
3. Access is restricted only to the doctor assigned to that patient.

**Priority:** Medium
**Story Points:** 5
**Notes:**
- Ensure sensitive patient data is handled securely.

- ---


- 
