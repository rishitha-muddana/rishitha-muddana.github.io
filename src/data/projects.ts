export interface Project {
  name: string
  description: string
  detail: string
  stack: string[]
  github?: string
  demo?: string
  award?: string
}

export const projects: Project[] = [
  {
    name: 'AI GitHub Code Reviewer',
    description: 'On-demand AI pull request reviewer that posts a single evolving review comment.',
    detail:
      'A GitHub App and webhook service that activates only when reviewers request it via a /review comment. Pulls the PR diff, generates a structured analysis grouped by severity, and posts one evolving comment — keeping teams in full control of when and how AI feedback appears.',
    stack: ['Python', 'GitHub API', 'LLM', 'Webhooks', 'Docker'],
    github: 'https://github.com/rishitha-muddana/ai-github-code-reviewer',
  },
  {
    name: 'Compliance Data Profiling Platform',
    description: 'Multi-cloud ingestion platform for audit and regulatory data across AWS, Azure, and GCP.',
    detail:
      'Built for JP Morgan Chase regulatory teams — a unified data ingestion layer with schema versioning, anomaly detection, and Snowflake governance automation. Serving 12 regulatory jurisdictions with lineage tracking and automated quality checks at each pipeline stage.',
    stack: ['Python', 'Apache Spark', 'Kafka', 'Snowflake', 'AWS', 'Azure', 'GCP', 'Kubernetes'],
  },
  {
    name: 'AML / KYC Event-Driven Alert System',
    description: 'Real-time fraud and compliance alerting for AML, SAR, and KYC case workflows.',
    detail:
      'Replaced a manual ETL-based compliance stack at First Republic Bank with an event-driven platform. Kafka-backed REST APIs process over 2M transactions daily, triggering real-time alerts with sub-second latency. Case workflows are fully configurable, eliminating the legacy Appian single point of failure.',
    stack: ['Python', 'Kafka', 'Spark', 'Snowflake', 'REST APIs', 'PostgreSQL'],
  },
  {
    name: 'Document Intelligence Platform',
    description: 'Containerized AI pipeline for automated invoice and document processing.',
    detail:
      'Designed at Archkey — end-to-end ingestion, extraction, and validation for invoices and procurement documents. Uses Azure Cognitive Services with custom LLM confidence scoring and vector-search matching against vendor catalogs to automate the exception-heavy parts of accounts payable.',
    stack: ['Python', 'Azure', 'LangChain', 'Vector DB', 'Docker', 'TypeScript'],
  },
]
