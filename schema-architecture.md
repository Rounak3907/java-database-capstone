This Spring Boot application uses both MVC and REST controllers. Thymeleaf templates are used for the Admin and Doctor dashboards, while REST APIs serve all other modules. The application interacts with two databases—MySQL (for patient, doctor, appointment, and admin data) and MongoDB (for prescriptions). All controllers route requests through a common service layer, which in turn delegates to the appropriate repositories. MySQL uses JPA entities while MongoDB uses document models.

1. User Entry: A user interacts with the system, either by browsing the Thymeleaf dashboards (for Admins and Doctors) or by triggering a REST API call from a mobile or web client.

2. Route Handling: The request hits the Controller Layer. It’s sorted here: Thymeleaf controllers handle page requests, while REST controllers manage data-only requests (JSON).

3. Logic Processing: The controller hands the data to the Service Layer. This is where the "thinking" happens—the app validates the request and applies the necessary business rules.

4. Database Routing: The Service Layer talks to the Repository Layer, which knows where to find the data. It picks the MySQL repository for standard info or the MongoDB repository for prescriptions.

5. Data Access: The repositories pull or save data from the actual databases. MySQL stores    structured details like appointments and profiles, while MongoDB holds flexible prescription documents.

6. Object Mapping: The system turns the database results back into Java objects. MySQL rows become JPA Entities, and MongoDB records become Document models.

7. Final Response: The data travels back up. For the dashboards, it’s plugged into a template to show a webpage; for the APIs, it’s sent back as a JSON response to the client.