// ============================================================
// PORTFOLIO DATA — edit this file to update all content
// ============================================================

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const personalInfo = {
  name: 'Keshika Arunkumar',
  title: 'Data Engineer',
  tagline: 'Building Scalable Pipelines & ML-Driven Analytics',
  location: 'Boston, MA',
  email: 'keshikaarunkumar01@gmail.com',
  phone: '+1 (857) 423-5586',
  linkedin: 'https://www.linkedin.com/in/keshika-arunkumar-page/',
  github: 'https://github.com/keshiarun01',
  tableau: 'https://public.tableau.com/app/profile/keshika.arunkumar',
  // Replace with your Formspree form ID: https://formspree.io/
  formspreeId: 'xojpwpzy',
  // Path to your resume in /public/
  resumePath: `${base}/Keshika_DE_Resume.pdf`,
  // Path to your photo in /public/images/
  photoPath: `${base}/images/keshika.jpg`,
};

export const about = {
  paragraphs: [
    'Data Engineer with over 3 years of experience building ETL pipelines, distributed data processing workflows, and analytics platforms across mobility, marketing technology, and enterprise infrastructure domains using PySpark, Apache Kafka, Databricks, Snowflake, AWS Glue, Hadoop, SQL, dbt, Airflow, and BigQuery.',
    'Currently at Uber, I build pipelines processing nearly 4M+ ride and trip events daily, having previously engineered customer segmentation and campaign attribution systems at Epsilon and server log ingestion infrastructure at Dell Technologies — supporting more than 250 recurring reporting and ingestion workflows across enterprise data operations.',
    'I hold a Microsoft Certified: Fabric Data Engineer Associate certification and a Master\'s in Data Analytics Engineering from Northeastern University (GPA: 3.84). I\'m passionate about data reliability, scalable architecture, and bridging raw data to actionable insights.',
  ],
  stats: [
    { value: 4, suffix: 'M+', label: 'Daily Events Processed at Uber' },
    { value: 250, suffix: '+', label: 'Recurring Reporting Workflows' },
    { value: 260, suffix: 'K+', label: 'Records Processed (OutbreakLens)' },
    { value: 100, suffix: '%', label: 'Data Quality Test Pass Rate' },
  ],
};

export const skills = [
  {
    category: 'Programming & Analytics',
    icon: 'Code2',
    color: 'teal',
    items: ['Python', 'PySpark', 'Pandas', 'NumPy', 'SQL', 'T-SQL', 'R', 'Unix Shell Scripting'],
  },
  {
    category: 'Big Data & Streaming',
    icon: 'GitBranch',
    color: 'amber',
    items: ['Apache Kafka', 'Hadoop', 'Hive', 'Sqoop', 'HDFS', 'Spark Structured Streaming', 'Delta Lake', 'Event-Stream Processing', 'Batch Processing'],
  },
  {
    category: 'Cloud & Lakehouse Platforms',
    icon: 'Cloud',
    color: 'teal',
    items: ['AWS (S3, EKS, Glue)', 'Azure (Data Factory, SQL DB, ADLS Gen2)', 'GCP', 'Microsoft Fabric (OneLake, Lakehouse)', 'Databricks', 'Snowflake', 'Amazon Redshift', 'BigQuery'],
  },
  {
    category: 'Data Modeling & Warehousing',
    icon: 'Database',
    color: 'amber',
    items: ['Star Schema', 'Dimensional Modeling', 'SCD Type 1 & 2', 'Medallion Architecture', 'PostgreSQL', 'MySQL', 'SQL Server', 'Oracle SQL', 'MongoDB'],
  },
  {
    category: 'ETL & Orchestration',
    icon: 'Settings',
    color: 'teal',
    items: ['Apache Airflow', 'Azure Data Factory', 'AWS Glue', 'Informatica PowerCenter', 'Talend', 'dbt', 'Great Expectations', 'ETL/ELT Pipelines', 'Data Validation', 'Data Reconciliation'],
  },
  {
    category: 'DevOps, BI & Reporting',
    icon: 'BarChart3',
    color: 'amber',
    items: ['Terraform', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions (CI/CD)', 'Power BI', 'Tableau', 'Streamlit', 'Excel'],
  },
];

export const experiences = [
  {
    company: 'Uber',
    role: 'Data Engineer',
    location: 'USA',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    highlights: [
      'Built data pipelines processing nearly 4M+ ride and trip events daily using PySpark and Apache Kafka across Snowflake environments, reducing operational reporting delays by 4 hours for marketplace analytics teams.',
      'Automated Delta Lake ingestion workflows using Databricks, Airflow, and SQL validation checks for rider and driver datasets, removing more than 850 recurring weekly data quality exceptions from reporting systems.',
      'Refined PostgreSQL and BigQuery query performance through indexing, partitioning, and ETL optimization techniques, accelerating 140+ recurring analytics workloads supporting operations and financial reporting teams.',
      'Standardized Terraform automation and CI/CD deployment processes for containerized analytics services, reducing manual release validation effort by 9 hours across monthly production deployments.',
      'Coordinated data validation initiatives with product managers, analysts, and backend engineers using Python and dbt monitoring models, resolving 320+ schema and transformation issues before executive dashboard releases.',
    ],
    tech: ['PySpark', 'Apache Kafka', 'Snowflake', 'Databricks', 'Airflow', 'PostgreSQL', 'BigQuery', 'Terraform', 'dbt'],
  },
  {
    company: 'Epsilon',
    role: 'Data Engineer',
    location: 'USA',
    period: 'Jan 2025 – Aug 2025',
    type: 'Full-time',
    highlights: [
      'Engineered customer segmentation pipelines using Spark SQL and Amazon Redshift for multi-channel campaign data, processing nearly 3.8M customer engagement records during quarterly targeting cycles.',
      'Consolidated batch ingestion processes through AWS Glue, Python, and Medallion Architecture transformation layers, reducing recurring advertising data load failures by nearly 120 records across weekly audience delivery runs.',
      'Integrated event-stream pipelines with Apache NiFi and MongoDB for loyalty and engagement platforms, reducing turnaround time for campaign attribution reporting across 6 regional marketing programs.',
      'Migrated legacy ETL mappings into Informatica PowerCenter and Oracle SQL pipelines, cutting nightly customer analytics refresh windows by nearly 3 operational hours across production reporting environments.',
      'Validated audience and conversion reporting layers using dbt, Tableau, and automated reconciliation scripts, identifying more than 90 mapping inconsistencies before downstream media performance reviews.',
    ],
    tech: ['Spark SQL', 'Amazon Redshift', 'AWS Glue', 'Apache NiFi', 'MongoDB', 'Informatica PowerCenter', 'Oracle SQL', 'dbt', 'Tableau'],
  },
  {
    company: 'Dell Technologies',
    role: 'Associate Data Engineer',
    location: 'India',
    period: 'Jul 2021 – Aug 2023',
    type: 'Full-time',
    highlights: [
      'Developed server log ingestion pipelines using Hadoop, Hive, and Sqoop for infrastructure monitoring data, processing nearly 1.6M system records supporting weekly storage and server performance reviews.',
      'Administered ETL scheduling routines through Unix Shell Scripting and Control-M, reducing delayed batch execution incidents across 45 recurring monthly processing jobs within production environments.',
      'Transformed hardware inventory feeds using PySpark and HDFS staging layers, improving reconciliation coverage across 12 enterprise asset tracking reports used by infrastructure support teams.',
      'Optimized transactional queries within MySQL and SQL Server reporting environments, shortening dashboard refresh intervals by nearly 90 minutes for supply chain analytics and inventory operations users.',
      'Streamlined data extraction procedures through Talend and XML parsing workflows, reducing manual remediation effort tied to more than 80 malformed vendor records during quarterly compliance audits.',
    ],
    tech: ['Hadoop', 'Hive', 'Sqoop', 'HDFS', 'PySpark', 'Unix Shell Scripting', 'MySQL', 'SQL Server', 'Talend', 'Power BI'],
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

export const certifications = [
  {
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2025',
    icon: 'Award',
  },
];
