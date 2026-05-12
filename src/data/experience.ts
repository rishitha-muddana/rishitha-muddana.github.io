export interface Role {
  title: string
  company: string
  period: string
  location: string
  bullets: string[]
  stack: string[]
  accentColor: string
}

export const experience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Northern Trust',
    period: 'Feb 2026 — Present',
    location: 'San Francisco, CA',
    accentColor: '#C9963A',
    bullets: [
      'Building and maintaining core software systems at one of the world\'s leading wealth management and asset servicing institutions, supporting high-reliability financial operations across global markets.',
      'Working within a technology-forward environment focused on platform modernization, data integrity, and delivering engineering solutions that meet the precision demands of institutional banking.',
      'Contributing to a team that services over $10 trillion in assets under custody — where system correctness and availability are foundational, not optional.',
    ],
    stack: ['Java', 'Python', 'SQL', 'Cloud', 'Financial Platforms'],
  },
  {
    title: 'Software Engineer',
    company: 'ArchKey Solutions',
    period: 'Jun 2025 — Nov 2025',
    location: 'San Francisco, CA',
    accentColor: '#1E3A5F',
    bullets: [
      'Designed and owned an end-to-end AI automation platform for document and invoice workflows, reducing manual processing time by over 60% across ingestion, validation, and approval stages.',
      'Built containerized extraction services with vendor-specific configuration and LLM-based confidence scoring on Azure, improving accuracy for edge-case documents that previously required full human review.',
      'Delivered vector-search matching against vendor catalogs and contracts, cutting manual exception handling by 40% and enabling near-real-time invoice reconciliation at scale.',
    ],
    stack: ['Python', 'TypeScript', 'React', 'Azure', 'LangChain', 'Docker', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer — Regulatory & Compliance',
    company: 'JP Morgan Chase',
    period: 'Jun 2023 — Feb 2025',
    location: 'San Francisco, CA',
    accentColor: '#8B6914',
    bullets: [
      'Built a multi-cloud data ingestion and profiling platform spanning AWS, Azure, GCP, and on-prem systems, serving audit and security teams across 12 regulatory jurisdictions.',
      'Developed Kafka and Spark pipelines with schema versioning, anomaly detection, and Snowflake governance automation — reducing false-positive compliance alerts by 35%.',
      'Automated deployments with Jenkins and Kubernetes and delivered Tableau dashboards for data lineage and risk insights, shrinking audit preparation cycles from weeks to days.',
    ],
    stack: ['Python', 'Apache Spark', 'Kafka', 'Snowflake', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'Jenkins'],
  },
  {
    title: 'Software Engineer — Regulatory & Compliance Technology',
    company: 'First Republic Bank',
    period: 'Feb 2022 — Jun 2023',
    location: 'San Francisco, CA',
    accentColor: '#2D6A4F',
    bullets: [
      'Modernized fraud and compliance systems for AML, SAR, and KYC by replacing manual ETL with a distributed, event-driven data platform — reducing case processing time by 50%.',
      'Designed Python and Spark pipelines on Snowflake and built Kafka-backed REST APIs for real-time transaction alerting, processing over 2M events daily with sub-second latency.',
      'Led migration from a legacy Appian platform to a cloud-native API system with configurable case workflows, eliminating a critical single point of failure in the compliance stack.',
    ],
    stack: ['Python', 'Apache Spark', 'Kafka', 'Snowflake', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Research Data Scientist',
    company: 'UNC Charlotte',
    period: 'Sep 2021 — Feb 2022',
    location: 'Charlotte, NC',
    accentColor: '#5C3317',
    bullets: [
      'Conducted cross-market analysis on privacy regulations (GDPR, CCPA) and their measurable impact on firm valuation, investor sentiment, and equity performance across 400+ public companies.',
      'Built an international dataset spanning 8 regulatory regimes and applied econometric models and causal inference to quantify the financial cost of compliance lag.',
      'Findings contributed to published research on regulatory risk pricing — cited by subsequent work on ESG compliance cost modeling.',
    ],
    stack: ['Python', 'R', 'Pandas', 'Econometrics', 'Causal Inference'],
  },
  {
    title: 'Founding Software Engineer',
    company: 'StraVis IT Solutions',
    period: 'May 2017 — Sep 2019',
    location: 'Hyderabad, India',
    accentColor: '#4A4A8A',
    bullets: [
      'Built a cloud-native multi-tenant ERP automation platform on Google Cloud with Python microservices on GKE and Pub/Sub event orchestration, serving 15+ enterprise clients.',
      'Implemented BigQuery analytics pipelines and delivered React dashboards for secure, real-time operational KPIs — reducing client reporting cycles from 3 days to under 30 minutes.',
      'Designed the platform\'s RBAC and secrets management architecture, achieving SOC 2 Type I readiness within the first year of operations.',
    ],
    stack: ['Python', 'React', 'GCP', 'BigQuery', 'Kubernetes', 'Pub/Sub', 'PostgreSQL'],
  },
]
