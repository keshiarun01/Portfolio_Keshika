// ============================================================
// PORTFOLIO DATA — edit this file to update all content
// ============================================================

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const personalInfo = {
  name: 'Keshika Arunkumar',
  title: 'Data Engineer',
  tagline: 'Building Scalable Pipelines & ML-Driven Analytics',
  location: 'Boston, MA',
  email: 'arunkumar.k@northeastern.edu',
  phone: '+1 (857) 423-5586',
  linkedin: 'https://www.linkedin.com/in/keshika-arunkumar-page/',
  github: 'https://github.com/keshiarun01',
  tableau: 'https://public.tableau.com/app/profile/keshika.arunkumar',
  // Replace with your Formspree form ID: https://formspree.io/
  formspreeId: 'xojpwpzy',
  // Path to your resume in /public/
  resumePath: '${base}/resume.pdf',
  // Path to your photo in /public/images/
  photoPath: '${base}/images/keshika.jpg',
};

export const about = {
  paragraphs: [
    'Results-driven Data Engineer skilled in building scalable data pipelines, cloud-native architectures, and ML-driven analytics using AWS/Azure, Python, SQL, and Spark. Experienced in optimizing ETL workflows and deploying AI models that improve data reliability, forecasting accuracy, and business KPIs.',
    'Currently completing my Master\'s in Data Analytics Engineering at Northeastern University (GPA: 3.84), I bring hands-on experience from Slay Inc. where I was the sole data engineer, building configuration-driven ingestion frameworks that improved pipeline reliability by 90%.',
    'I\'m passionate about data storytelling, visual presentation, and building production-grade systems that bridge the gap between raw data and actionable insights.',
  ],
  stats: [
    { value: 90, suffix: '%', label: 'Pipeline Reliability Improvement' },
    { value: 40, suffix: '%', label: 'Query Latency Reduction' },
    { value: 260, suffix: 'K+', label: 'Records Processed' },
    { value: 100, suffix: '%', label: 'Data Quality Test Pass Rate' },
  ],
};

export const skills = [
  {
    category: 'Programming & Analytics',
    icon: 'Code2',
    color: 'teal',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SQL', 'T-SQL', 'R'],
  },
  {
    category: 'Cloud & Data Platforms',
    icon: 'Cloud',
    color: 'amber',
    items: ['Azure Data Factory', 'Azure SQL DB', 'Azure Blob Storage', 'Azure AKS', 'Azure Event Hubs', 'AWS S3', 'AWS EKS', 'AWS EC2', 'GCP', 'Snowflake', 'Databricks'],
  },
  {
    category: 'Data Engineering',
    icon: 'GitBranch',
    color: 'teal',
    items: ['Apache Airflow', 'dbt', 'ETL/ELT Pipelines', 'Docker', 'Kubernetes', 'Star Schema', 'Medallion Architecture', 'Delta Lake', 'PySpark', 'Spark Structured Streaming'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    color: 'amber',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Snowflake', 'Oracle', 'MinIO'],
  },
  {
    category: 'BI & Visualization',
    icon: 'BarChart3',
    color: 'teal',
    items: ['Tableau', 'Power BI', 'Streamlit', 'MS Excel (Advanced)', 'Jupyter'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Settings',
    color: 'amber',
    items: ['Git', 'GitHub Actions (CI/CD)', 'Linux', 'Agile/Scrum', 'Data Governance', 'Great Expectations'],
  },
];

export const experiences = [
  {
    company: 'Slay Inc.',
    role: 'Data Engineer',
    location: 'Boston, MA',
    period: 'Jan 2025 – Aug 2025',
    type: 'Full-time',
    highlights: [
      'Designed and maintained scalable ETL/ELT pipelines using Python, Apache Airflow, and Azure Data Factory, orchestrating batch and near real-time ingestion of 1K+ customer profiles from APIs, JSON, and CSV sources into Azure SQL Database.',
      'Implemented configuration-driven ingestion frameworks with automated data validation and quality checks, improving pipeline reliability by 90% across production workflows.',
      'Optimized T-SQL queries, indexing strategies, and data models (Star Schema, ERDs) within SQL Server, reducing feature availability latency by 40% for downstream analytics and Power BI reporting.',
      'Developed and maintained CI/CD pipelines using GitHub Actions for automated testing and deployment of data platform components on Azure (AKS, Blob Storage, Azure Monitor).',
      'Collaborated with cross-functional teams in Agile ceremonies to troubleshoot real-time pipeline failures, ensuring uninterrupted product releases and data platform health.',
    ],
    tech: ['Python', 'Apache Airflow', 'Azure Data Factory', 'T-SQL', 'Power BI', 'GitHub Actions', 'Azure AKS'],
  },
  {
    company: 'AssetPlus Consultancies Pvt. Ltd.',
    role: 'Data Science Intern',
    location: 'Chennai, IN',
    period: 'May 2023 – Aug 2023',
    type: 'Internship',
    highlights: [
      'Reduced gas loss from 3.23% to 0.97% by writing Python scripts to implement ARIMA, Random Forest, and XGBoost models for gas consumption forecasting and anomaly detection.',
      'Enhanced model accuracy by 15% through feature engineering, integrating weather, holiday, and temporal variables for more robust demand predictions.',
      'Optimized XGBoost via GridSearchCV, achieving 15% lower MAE and 10% lower RMSE, and deployed insights through Tableau dashboards, improving operational decision-making.',
    ],
    tech: ['Python', 'ARIMA', 'Random Forest', 'XGBoost', 'Tableau', 'GridSearchCV', 'Feature Engineering'],
  },
  {
    company: 'Unified Mentor',
    role: 'Data Analyst Intern',
    location: 'Chennai, IN',
    period: 'Mar 2022 – Jun 2022',
    type: 'Internship',
    highlights: [
      'Built Tableau dashboards and ETL workflows to analyze sales and operational datasets, improving reporting refresh time by 35% and enabling faster business insights.',
      'Conducted trend analysis and KPI-based performance reporting, identifying seasonal demand patterns that improved planning outcomes by 15%.',
    ],
    tech: ['Tableau', 'ETL', 'SQL', 'Data Analysis', 'KPI Reporting'],
  },
];

export const projects = [
  {
    title: 'RideStream: Real-Time Uber Data Pipeline',
    description: 'End-to-end real-time data pipeline on Azure ingesting dual event streams via Azure Event Hubs into Databricks, processing 10K+ events with PySpark Structured Streaming.',
    longDescription: 'Engineered end-to-end real-time data pipeline on Azure ingesting dual event streams (WebApp telemetry + GitHub ride data) via Azure Event Hubs into Azure Databricks. Architected a 3-layer Medallion Architecture (Bronze/Silver/Gold) on Delta Lake with Spark Declarative Pipelines, enforcing data quality constraints. Implemented SCD Type 1 & 2 dimension versioning using MERGE INTO operations.',
    tech: ['Azure', 'Event Hubs', 'Databricks', 'PySpark', 'Delta Lake', 'Medallion Architecture', 'Star Schema', 'Jinja2'],
    github: 'https://github.com/keshiarun01/Uber-End-to-End-DataEngineering-Project',
    demo: '',
    featured: true,
    highlights: ['10K+ events processed', '60% query complexity reduction', 'SCD Type 1 & 2 implemented'],
    color: 'teal',
  },
  {
    title: 'OutbreakLens: Global Disease Surveillance',
    description: 'End-to-end disease surveillance platform with Lakehouse architecture processing 260K+ records through dbt models with 100% data quality test pass rate.',
    longDescription: 'Engineered end-to-end data pipelines ingesting data from 3 diverse sources via 5 Airflow DAGs with scheduling, retries, and dependency management into MinIO and PostgreSQL. Implemented Medallion Architecture transforming ~260K+ raw records through dbt models with 27 automated data quality tests achieving 100% pass rate. Built gold-layer analytics with 4-week rolling averages and outbreak alert signals.',
    tech: ['Airflow', 'dbt', 'MinIO', 'PostgreSQL', 'Docker', 'T-SQL', 'Medallion Architecture'],
    github: 'https://github.com/keshiarun01/OutbreakLens',
    demo: '',
    featured: true,
    highlights: ['260K+ records processed', '27 automated DQ tests', '100% pass rate'],
    color: 'amber',
  },
  {
    title: 'Financial Data Quality Monitor',
    description: 'Automated financial data quality pipeline ingesting 5,600+ equity and macro records with 29 automated checks across 8 ETFs and 7 macro indicators.',
    longDescription: 'Built automated financial data quality pipeline ingesting 5,600+ equity and macro-economic records from 3 external market data sources via 3 Airflow DAGs with 6 QC layers, achieving 100% null-check and cross-vendor reconciliation pass rates. Deployed containerized Streamlit dashboard with real-time data health scorecard.',
    tech: ['Airflow', 'PostgreSQL', 'Great Expectations', 'Streamlit', 'Docker', 'Python', 'SQL'],
    github: 'https://github.com/keshiarun01/Financial-Data-QualityMonitor',
    demo: '',
    featured: true,
    highlights: ['232 anomalies flagged', '29 automated checks', 'RED/YELLOW/GREEN health scores'],
    color: 'teal',
  },
  {
    title: 'IssueMind: AI-Powered GitHub Intelligence',
    description: 'Kubernetes-based data ecosystem on AWS EKS with vectorized GitHub issue retrieval cutting query latency by 85%.',
    longDescription: 'Built automated ETL pipelines using Airflow, Snowflake, and S3, improving data accuracy to 98% and reducing manual prep time by 70%. Modeled vectorized issue data using Python, SQL, and Milvus, cutting query latency by 85% and scaling retrieval for 10K records. Deployed Kubernetes-based ecosystem on AWS EKS with Grafana monitoring.',
    tech: ['AWS EKS', 'Snowflake', 'Airflow', 'Milvus', 'Grafana', 'S3', 'Kubernetes'],
    github: 'https://github.com/keshiarun01/Github_Application',
    demo: '',
    featured: false,
    highlights: ['85% latency reduction', '98% data accuracy', '90% pipeline reliability'],
    color: 'amber',
  },
  {
    title: 'Sales Data Warehouse',
    description: 'End-to-end data warehouse using SQL Server with Bronze-Silver-Gold Medallion Architecture consolidating 6 tables from 2 source systems into a Star Schema data mart.',
    longDescription: 'Built an end-to-end data warehouse using SQL Server consolidating CRM & ERP data. Developed ETL pipelines using stored procedures to cleanse, standardize, and normalize raw CSV data, resolving data quality issues across 10+ fields. Modeled Star Schema with 1 fact and 2 dimension tables for SQL-based analytics.',
    tech: ['SQL Server', 'T-SQL', 'Star Schema', 'Medallion Architecture', 'ETL', 'Stored Procedures'],
    github: 'https://github.com/keshiarun01/SQL-DWHProject',
    demo: '',
    featured: false,
    highlights: ['6 tables unified', '2 source systems', 'Full ETL with DQ'],
    color: 'teal',
  },
  {
    title: 'AI Research Agent System',
    description: 'Multi-agent conversational intelligence platform using LangGraph and GPT-4 where Researcher and Critic agents debate and refine insights.',
    longDescription: 'Built a multi-agent research system using LangGraph and GPT-4 where Researcher and Critic agents debate and refine insights, reducing literature synthesis time by 90%. Engineered a retrieval pipeline with arXiv API, PyPDF, FAISS, and sentence-transformers, achieving 0.8 semantic accuracy.',
    tech: ['LangGraph', 'GPT-4', 'FAISS', 'LangChain', 'Streamlit', 'arXiv API', 'PyPDF'],
    github: 'https://github.com/keshiarun01/AgenticAI',
    demo: '',
    featured: false,
    highlights: ['90% synthesis time reduction', '0.8 semantic accuracy', 'Multi-agent architecture'],
    color: 'amber',
  },
  {
    title: 'ClimaSmart: AI Weather Prediction',
    description: 'MLOps-grade weather prediction system on GCP with full CI/CD pipeline, Docker, Kubernetes, and MLflow for experiment tracking.',
    longDescription: 'Orchestrated ETL and feature engineering using Apache Airflow on GCP. Optimized compute and storage using GCS, Docker, and Kubernetes with MLflow for reproducibility. Built CI/CD pipeline using GitHub Actions → GCR → GCP VMs for reliable deployments.',
    tech: ['GCP', 'Apache Airflow', 'Docker', 'Kubernetes', 'MLflow', 'DVC', 'Streamlit', 'GitHub Actions'],
    github: 'https://github.com/MLOps-Group-8/clima-smart',
    demo: '',
    featured: false,
    highlights: ['End-to-end MLOps', 'GCP deployment', 'Full CI/CD pipeline'],
    color: 'teal',
  },
];

export const education = [
  {
    institution: 'Northeastern University',
    degree: 'Master of Science in Data Analytics Engineering',
    location: 'Boston, MA',
    period: 'Dec 2025',
    gpa: '3.84',
    courses: ['Database Management', 'Data Mining', 'Machine Learning Operations', 'Natural Language Processing'],
  },
  {
    institution: 'Anna University',
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    location: 'Chennai, IN',
    period: 'May 2023',
    gpa: '3.91',
    courses: ['Probability and Statistics', 'Data Structures', 'Python Programming', 'OOPS', 'Machine Learning'],
  },
];
