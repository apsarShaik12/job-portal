package com.jobportal;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    private final JobRepository repo;
    public DataInitializer(JobRepository repo) { this.repo = repo; }

    @Override
    public void run(String... args) throws Exception {
        if (repo.count() == 0) {
            Job j1 = new Job();
            j1.setTitle("Frontend Developer");
            j1.setCompany("PixelForge");
            j1.setLocation("Bengaluru");
            j1.setSalary("₹6–10 LPA");
            j1.setDescription("Build delightful UI with React.");
            repo.save(j1);

            Job j2 = new Job();
            j2.setTitle("Electrical Site Engineer");
            j2.setCompany("VoltWorks");
            j2.setLocation("Hyderabad");
            j2.setSalary("₹4–7 LPA");
            j2.setDescription("Supervise electrical installations.");
            repo.save(j2);
        }
    }
}
