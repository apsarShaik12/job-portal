package com.jobportal.controller;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    // Get all jobs with optional search query
    @GetMapping
    public List<Job> getAll(@RequestParam(required = false) String q) {
        if (q != null && !q.isBlank()) {
            return repo.findByTitleContainingIgnoreCaseOrCompanyContainingIgnoreCase(q, q);
        }
        return repo.findAll();
    }

    // Get single job by ID
    @GetMapping("/{id}")
    public ResponseEntity<Job> get(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new job
    @PostMapping
    public ResponseEntity<Job> create(@Valid @RequestBody Job job) {
        Job saved = repo.save(job);
        return ResponseEntity.status(201).body(saved);
    }

    // Update existing job
    @PutMapping("/{id}")
    public ResponseEntity<Job> update(@PathVariable Long id, @Valid @RequestBody Job job) {
        return repo.findById(id).map(existing -> {
            existing.setTitle(job.getTitle());
            existing.setCompany(job.getCompany());
            existing.setLocation(job.getLocation());
            existing.setSalary(job.getSalary());
            existing.setDescription(job.getDescription());
            existing.setRequirements(job.getRequirements());
            existing.setEmployerId(job.getEmployerId());
            Job updated = repo.save(existing);
            return ResponseEntity.ok(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Delete job by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
