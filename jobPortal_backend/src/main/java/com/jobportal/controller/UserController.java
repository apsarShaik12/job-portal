package com.jobportal.controller;

import com.jobportal.model.User;
import com.jobportal.repository.UserRepository;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    // Registration
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().build(); // Email exists
        }
        User saved = repo.save(user);
        return ResponseEntity.status(201).body(saved);
    }

    @GetMapping("/test")
public String test() {
    return "Controller is working!";
}
    @GetMapping
public List<User> getAllUsers() {
    return repo.findAll();
}


    // Login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        return repo.findByEmail(user.getEmail())
            .filter(u -> u.getPassword().equals(user.getPassword()))
            .map(u -> ResponseEntity.ok("Login successful"))
            .orElse(ResponseEntity.status(401).body("Invalid credentials"));
    }
}
