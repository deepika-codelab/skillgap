CREATE DATABASE skill_gap;
USE skill_gap;

CREATE TABLE job_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(100),
    required_skills TEXT
);

INSERT INTO job_roles (role_name, required_skills)
VALUES ('Web Developer', 'HTML,CSS,JavaScript,MySQL,Bootstrap');
