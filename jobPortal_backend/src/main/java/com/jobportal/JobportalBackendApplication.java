package com.jobportal;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JobportalBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobportalBackendApplication.class, args);
    }
    @Bean
    CommandLineRunner runner(JobRepository jobRepository) {
        return args -> {
            Job job = new Job();
            job.setTitle("Software Engineer");
            job.setCompany("TechCorp");
            job.setLocation("Bangalore");
            job.setSalary("₹50,000 - ₹70,000");
            job.setDescription("Develop and maintain web applications.");
            job.setRequirements("Java, Spring Boot, MySQL");
            job.setEmployerId(1L);

            jobRepository.save(job);

            jobRepository.findAll().forEach(j ->
                System.out.println(j.getId() + " | " + j.getTitle() + " | " + j.getCompany())
            );
        };
    }
}
