package com.project.back_end.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;

// Import your actual service class here
// import com.project.back_end.service.YourServiceName; 

@Controller
public class DashboardController {

    @Autowired
    private YourServiceName service; // Replace 'YourServiceName' with the actual service class name

    @GetMapping("/adminDashboard/{token}")
    public String adminDashboard(@PathVariable String token) {
        Map<String, String> validationResult = service.validateToken(token, "admin");
        
        if (validationResult.isEmpty()) {
            // Token is valid
            return "admin/adminDashboard";
        } else {
            // Token is invalid, redirect to login
            return "redirect:http://localhost:8080";
        }
    }

    @GetMapping("/doctorDashboard/{token}")
    public String doctorDashboard(@PathVariable String token) {
        Map<String, String> validationResult = service.validateToken(token, "doctor");
        
        if (validationResult.isEmpty()) {
            // Token is valid
            return "doctor/doctorDashboard";
        } else {
            // Token is invalid, redirect to login
            return "redirect:http://localhost:8080";
        }
    }
}