### Node.js CI Pipeline (Security + Quality Checks)

This repository includes a CI pipeline using GitHub Actions that performs:

    Static code analysis with SonarQube
    
    Dependency installation and testing
    
    Filesystem vulnerability scanning with Trivy
    
    Docker image build
    
    Container image security scanning
    
    Push to Docker Hub

The goal of this pipeline is to ensure code quality, security, and build validation before publishing container images.

## Pipeline Triggers

The workflow runs when:

    Code is pushed to the main branch
    
    A Pull Request is opened, synchronized, or reopened

## Pipeline Stages
# 1. SonarQube Scan

    Performs static code analysis to detect:
    
    Code smells
    
    Bugs
    
    Security vulnerabilities
    
    Maintainability issues
    
    The scan uses the SONAR_TOKEN secret to authenticate with SonarQube.

# 2. Node.js Setup & Project Scan

    This stage prepares the Node.js environment and performs checks.
    
    Steps:
    
    Checkout repository
    
    Setup Node.js
    
    Install project dependencies
    
    Run project tests
    
    Scan filesystem for vulnerabilities using Trivy

# 3. Docker Build & Image Security Scan

    This stage builds the container image and scans it for vulnerabilities.
    
    Steps:
    
    Build Docker image
    
    Run Trivy container image scan
    
    Authenticate with Docker Hub
    
    Push image if all checks succeed

## Technologies Used

    GitHub Actions
    
    SonarQube
    
    Trivy Security Scanner
    
    Docker
    
    Docker Hub
    
    Node.js
