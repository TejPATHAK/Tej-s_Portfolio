export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  slug: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  outcomes: string[];
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'GitOps-Based NGINX Reverse Proxy Deployment',
    description: 'Automated NGINX reverse proxy deployment using GitOps principles with ArgoCD and Kubernetes.',
    techStack: ['Kubernetes', 'ArgoCD', 'NGINX', 'GitOps', 'Docker'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    slug: 'gitops-nginx-proxy',
    problem: 'Manual deployment processes were error-prone and time-consuming, leading to inconsistent environments and deployment failures.',
    solution: 'Implemented a GitOps-based deployment pipeline using ArgoCD to automatically sync NGINX configurations from Git repositories to Kubernetes clusters.',
    keyFeatures: [
      'Automated deployment synchronization',
      'Git-based configuration management',
      'Self-healing infrastructure',
      'Rollback capabilities',
      'Multi-environment support'
    ],
    outcomes: [
      'Reduced deployment time by 80%',
      'Eliminated manual configuration errors',
      'Achieved 99.9% deployment success rate',
      'Improved team collaboration through GitOps workflow'
    ],
    codeSnippets: [
      {
        title: 'ArgoCD Application Configuration',
        language: 'yaml',
        code: 'apiVersion: argoproj.io/v1alpha1\n' +
              'kind: Application\n' +
              'metadata:\n' +
              '  name: nginx-proxy\n' +
              '  namespace: argocd\n' +
              'spec:\n' +
              '  project: default\n' +
              '  source:\n' +
              '    repoURL: https://github.com/tejaswi-pathak/nginx-proxy\n' +
              '    targetRevision: HEAD\n' +
              '    path: k8s\n' +
              '  destination:\n' +
              '    server: https://kubernetes.default.svc\n' +
              '    namespace: nginx-proxy\n' +
              '  syncPolicy:\n' +
              '    automated:\n' +
              '      prune: true\n' +
              '      selfHeal: true'
      }
    ]
  },
  {
    id: '2',
    title: 'CI/CD Pipeline for Multi-Container App',
    description: 'End-to-end CI/CD pipeline for a microservices application with automated testing and deployment.',
    techStack: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Helm'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    slug: 'cicd-multi-container',
    problem: 'Complex microservices deployment required manual coordination between teams, leading to delayed releases and integration issues.',
    solution: 'Built a comprehensive CI/CD pipeline that automates testing, building, and deployment of multiple containerized services with proper orchestration.',
    keyFeatures: [
      'Automated testing pipeline',
      'Multi-stage Docker builds',
      'Kubernetes deployment automation',
      'Code quality gates with SonarQube',
      'Slack notifications for pipeline status'
    ],
    outcomes: [
      'Reduced release cycle from weeks to hours',
      'Improved code quality by 40%',
      'Zero-downtime deployments achieved',
      'Enhanced team productivity and collaboration'
    ],
    codeSnippets: [
      {
        title: 'Jenkins Pipeline Configuration',
        language: 'groovy',
        code: 'pipeline {\n' +
              '    agent any\n' +
              '    \n' +
              '    stages {\n' +
              '        stage(\'Checkout\') {\n' +
              '            steps {\n' +
              '                git branch: \'main\', url: \'https://github.com/tejaswi-pathak/microservices-app\'\n' +
              '            }\n' +
              '        }\n' +
              '        \n' +
              '        stage(\'Test\') {\n' +
              '            steps {\n' +
              '                sh \'npm test\'\n' +
              '                sh \'npm run test:coverage\'\n' +
              '            }\n' +
              '        }\n' +
              '        \n' +
              '        stage(\'Build\') {\n' +
              '            steps {\n' +
              '                sh \'docker build -t app:${BUILD_NUMBER} .\'\n' +
              '            }\n' +
              '        }\n' +
              '        \n' +
              '        stage(\'Deploy\') {\n' +
              '            steps {\n' +
              '                sh \'kubectl apply -f k8s/\'\n' +
              '                sh \'kubectl set image deployment/app app=app:${BUILD_NUMBER}\'\n' +
              '            }\n' +
              '        }\n' +
              '    }\n' +
              '}'
      }
    ]
  },
  {
    id: '3',
    title: 'Jenkins Cluster in Docker & Kubernetes',
    description: 'Scalable Jenkins cluster deployment with master-slave architecture for distributed builds.',
    techStack: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'JNLP', 'Persistent Volumes'],
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    slug: 'jenkins-cluster-k8s',
    problem: 'Single Jenkins instance became a bottleneck for multiple teams, causing build queues and resource constraints.',
    solution: 'Deployed a scalable Jenkins cluster on Kubernetes with dynamic agent provisioning and persistent storage for build artifacts.',
    keyFeatures: [
      'Master-slave architecture',
      'Dynamic agent scaling',
      'Persistent volume management',
      'Load balancing across agents',
      'Automated backup and recovery'
    ],
    outcomes: [
      'Increased build capacity by 300%',
      'Reduced average build time by 60%',
      'Achieved high availability with 99.95% uptime',
      'Enabled parallel builds for multiple teams'
    ],
    codeSnippets: [
      {
        title: 'Jenkins Master Deployment',
        language: 'yaml',
        code: 'apiVersion: apps/v1\n' +
              'kind: Deployment\n' +
              'metadata:\n' +
              '  name: jenkins-master\n' +
              'spec:\n' +
              '  replicas: 1\n' +
              '  selector:\n' +
              '    matchLabels:\n' +
              '      app: jenkins-master\n' +
              '  template:\n' +
              '    metadata:\n' +
              '      labels:\n' +
              '        app: jenkins-master\n' +
              '    spec:\n' +
              '      containers:\n' +
              '      - name: jenkins\n' +
              '        image: jenkins/jenkins:lts\n' +
              '        ports:\n' +
              '        - containerPort: 8080\n' +
              '        - containerPort: 50000\n' +
              '        volumeMounts:\n' +
              '        - name: jenkins-home\n' +
              '          mountPath: /var/jenkins_home\n' +
              '      volumes:\n' +
              '      - name: jenkins-home\n' +
              '        persistentVolumeClaim:\n' +
              '          claimName: jenkins-pvc'
      }
    ]
  },
  {
    id: '4',
    title: 'Ansible Cluster Automation Using Docker & K8s',
    description: 'Automated infrastructure provisioning and configuration management using Ansible in containerized environments.',
    techStack: ['Ansible', 'Docker', 'Kubernetes', 'Terraform', 'SSH'],
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
    slug: 'ansible-cluster-automation',
    problem: 'Manual server configuration and application deployment across multiple environments was time-consuming and error-prone.',
    solution: 'Created Ansible playbooks for automated infrastructure provisioning, configuration management, and application deployment in containerized environments.',
    keyFeatures: [
      'Infrastructure as Code with Ansible',
      'Automated server provisioning',
      'Configuration drift detection',
      'Multi-environment deployment',
      'Idempotent playbook execution'
    ],
    outcomes: [
      'Reduced infrastructure setup time by 90%',
      'Eliminated configuration inconsistencies',
      'Improved security compliance',
      'Enabled rapid environment replication'
    ],
    codeSnippets: [
      {
        title: 'Ansible Playbook for K8s Deployment',
        language: 'yaml',
        code: '---\n' +
              '- name: Deploy Application to Kubernetes\n' +
              '  hosts: localhost\n' +
              '  tasks:\n' +
              '    - name: Create namespace\n' +
              '      kubernetes.core.k8s:\n' +
              '        name: "{{ app_namespace }}"\n' +
              '        api_version: v1\n' +
              '        kind: Namespace\n' +
              '        state: present\n' +
              '    \n' +
              '    - name: Deploy application\n' +
              '      kubernetes.core.k8s:\n' +
              '        state: present\n' +
              '        definition:\n' +
              '          apiVersion: apps/v1\n' +
              '          kind: Deployment\n' +
              '          metadata:\n' +
              '            name: "{{ app_name }}"\n' +
              '            namespace: "{{ app_namespace }}"\n' +
              '          spec:\n' +
              '            replicas: "{{ app_replicas }}"\n' +
              '            selector:\n' +
              '              matchLabels:\n' +
              '                app: "{{ app_name }}"\n' +
              '            template:\n' +
              '              metadata:\n' +
              '                labels:\n' +
              '                  app: "{{ app_name }}"\n' +
              '              spec:\n' +
              '                containers:\n' +
              '                - name: "{{ app_name }}"\n' +
              '                  image: "{{ app_image }}"\n' +
              '                  ports:\n' +
              '                  - containerPort: 80'
      }
    ]
  },
  {
    id: '5',
    title: 'AWS IAM Security Automation using AWS CLI',
    description: 'Designed and implemented a secure IAM framework on AWS using CLI, eliminating manual UI-based configuration.',
    techStack: ['AWS CLI', 'IAM', 'CloudTrail', 'S3', 'MFA', 'DevSecOps'],
    image: 'https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg',
    slug: 'aws-iam-security-automation',
    problem: 'Manual IAM configuration through AWS Console was time-consuming, error-prone, and lacked proper security controls and audit trails.',
    solution: 'Implemented a comprehensive IAM security framework using AWS CLI with automated user management, policy enforcement, and security monitoring.',
    keyFeatures: [
      'Custom IAM policy (ReadOnlyS3EC2Policy) for fine-grained access control',
      'IAM group (adminsGroup) setup with scoped permissions',
      'Password policies with complexity rules and rotation',
      'Multi-Factor Authentication (MFA) with virtual device setup',
      'AWS CloudTrail integration for activity logging',
      'Automated cleanup to prevent billing charges'
    ],
    outcomes: [
      'Eliminated manual UI-based IAM configuration',
      'Implemented enterprise-grade security policies',
      'Achieved full audit trail with CloudTrail logging',
      'Gained hands-on DevSecOps and identity lifecycle management experience',
      'Documented project with CLI execution outputs and screenshots'
    ],
    codeSnippets: [
      {
        title: 'IAM Policy Creation',
        language: 'bash',
        code: '# Create custom IAM policy for S3 and EC2 read-only access\n' +
              'aws iam create-policy \\\n' +
              '  --policy-name ReadOnlyS3EC2Policy \\\n' +
              '  --policy-document file://policy.json\n' +
              '\n' +
              '# Create IAM group and attach policy\n' +
              'aws iam create-group --group-name adminsGroup\n' +
              'aws iam attach-group-policy \\\n' +
              '  --group-name adminsGroup \\\n' +
              '  --policy-arn arn:aws:iam::ACCOUNT:policy/ReadOnlyS3EC2Policy\n' +
              '\n' +
              '# Create user and add to group\n' +
              'aws iam create-user --user-name devops-user\n' +
              'aws iam add-user-to-group \\\n' +
              '  --group-name adminsGroup \\\n' +
              '  --user-name devops-user'
      },
      {
        title: 'MFA Setup and CloudTrail Configuration',
        language: 'bash',
        code: '# Create virtual MFA device\n' +
              'aws iam create-virtual-mfa-device \\\n' +
              '  --virtual-mfa-device-name devops-mfa \\\n' +
              '  --outfile QRCode.png \\\n' +
              '  --bootstrap-method QRCodePNG\n' +
              '\n' +
              '# Enable MFA for user\n' +
              'aws iam enable-mfa-device \\\n' +
              '  --user-name devops-user \\\n' +
              '  --serial-number arn:aws:iam::ACCOUNT:mfa/devops-mfa \\\n' +
              '  --authentication-code-1 123456 \\\n' +
              '  --authentication-code-2 789012\n' +
              '\n' +
              '# Create CloudTrail for logging\n' +
              'aws cloudtrail create-trail \\\n' +
              '  --name devops-audit-trail \\\n' +
              '  --s3-bucket-name devops-cloudtrail-logs\n' +
              '\n' +
              '# Start logging\n' +
              'aws cloudtrail start-logging \\\n' +
              '  --name devops-audit-trail'
      }
    ]
  },
  {
    id: '6',
    title: 'Terraform Infrastructure Automation – Core Concepts Implementation',
    description: 'Designed and implemented AWS infrastructure using Terraform while mastering core DevOps and Infrastructure as Code concepts.',
    techStack: ['Terraform', 'AWS', 'CLI', 'HCL', 'Infrastructure as Code'],
    image: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg',
    slug: 'terraform-infrastructure-automation',
    problem: 'Manual infrastructure provisioning was time-consuming, error-prone, and lacked consistency across environments, making it difficult to maintain and scale infrastructure.',
    solution: 'Implemented Infrastructure as Code using Terraform to automate AWS infrastructure provisioning with declarative configuration, ensuring consistency and repeatability.',
    keyFeatures: [
      'Used variables (string, list, map) for modular and reusable code',
      'Assigned multiline shell script to a variable using HEREDOC (EOF) for EC2 provisioning via user_data',
      'Applied Terraform configuration using terraform apply -auto-approve for automation',
      'Stored sensitive data securely using sensitive = true in variables',
      'Validated the difference between Imperative and Declarative approaches'
    ],
    outcomes: [
      'Successfully launched and managed AWS EC2 infrastructure with automation',
      'Implemented security best practices for sensitive data handling',
      'Achieved true Infrastructure-as-Code principles',
      'Reduced infrastructure provisioning time by 85%'
    ],
    codeSnippets: [
      {
        title: 'Terraform Variables Configuration',
        language: 'hcl',
        code: 'variable "instance_type" {\n' +
              '  description = "EC2 instance type"\n' +
              '  type        = string\n' +
              '  default     = "t2.micro"\n' +
              '}\n' +
              '\n' +
              'variable "user_data_script" {\n' +
              '  description = "User data script for EC2"\n' +
              '  type        = string\n' +
              '  sensitive   = true\n' +
              '  default     = <<-EOF\n' +
              '    #!/bin/bash\n' +
              '    yum update -y\n' +
              '    yum install -y docker\n' +
              '    systemctl start docker\n' +
              '    systemctl enable docker\n' +
              '  EOF\n' +
              '}\n' +
              '\n' +
              'variable "tags" {\n' +
              '  description = "Resource tags"\n' +
              '  type        = map(string)\n' +
              '  default = {\n' +
              '    Environment = "dev"\n' +
              '    Project     = "terraform-demo"\n' +
              '  }\n' +
              '}'
      }
    ]
  },
  {
    id: '7',
    title: 'Dockerized Microservice Application with Prometheus and Grafana',
    description: 'Designed and implemented a scalable microservices-based application using Docker containers with comprehensive monitoring and visualization.',
    techStack: ['Docker', 'Docker Compose', 'Prometheus', 'Grafana', 'Node.js', 'REST APIs', 'Linux CLI'],
    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg',
    slug: 'dockerized-microservice-monitoring',
    problem: 'Monolithic applications lacked scalability and observability, making it difficult to monitor service health, debug issues, and optimize performance in production environments.',
    solution: 'Built a microservices architecture with Docker containerization, integrated Prometheus for metrics collection, and Grafana for visualization to achieve comprehensive observability.',
    keyFeatures: [
      'Developed multiple loosely coupled services communicating via REST APIs',
      'Containerized each microservice and orchestrated them using Docker Compose',
      'Integrated Prometheus for real-time metrics collection from each service',
      'Set up Grafana dashboards to visualize service health and performance metrics',
      'Implemented custom Prometheus metrics for application-specific KPIs',
      'Configured alert rules in Prometheus for proactive incident detection',
      'Added HTTP health check endpoints and containerized logging support'
    ],
    outcomes: [
      'Gained hands-on experience in microservice development and containerization',
      'Understood end-to-end pipeline from development to deployment and monitoring',
      'Learned to debug and optimize performance using dashboards and alerts',
      'Developed DevOps mindset for automated infrastructure and self-healing systems'
    ],
    codeSnippets: [
      {
        title: 'Docker Compose Configuration',
        language: 'yaml',
        code: 'version: \'3.8\'\n' +
              'services:\n' +
              '  user-service:\n' +
              '    build: ./user-service\n' +
              '    ports:\n' +
              '      - "3001:3000"\n' +
              '    environment:\n' +
              '      - NODE_ENV=production\n' +
              '    healthcheck:\n' +
              '      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]\n' +
              '      interval: 30s\n' +
              '      timeout: 10s\n' +
              '      retries: 3\n' +
              '\n' +
              '  prometheus:\n' +
              '    image: prom/prometheus:latest\n' +
              '    ports:\n' +
              '      - "9090:9090"\n' +
              '    volumes:\n' +
              '      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n' +
              '    command:\n' +
              '      - \'--config.file=/etc/prometheus/prometheus.yml\'\n' +
              '      - \'--storage.tsdb.path=/prometheus\'\n' +
              '      - \'--web.console.libraries=/etc/prometheus/console_libraries\'\n' +
              '\n' +
              '  grafana:\n' +
              '    image: grafana/grafana:latest\n' +
              '    ports:\n' +
              '      - "3000:3000"\n' +
              '    environment:\n' +
              '      - GF_SECURITY_ADMIN_PASSWORD=admin\n' +
              '    volumes:\n' +
              '      - grafana-storage:/var/lib/grafana\n' +
              '\n' +
              'volumes:\n' +
              '  grafana-storage:'
      }
    ]
  }
];