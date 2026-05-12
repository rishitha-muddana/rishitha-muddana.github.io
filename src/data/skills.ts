import { Code2, Cloud, Database, Shield, Cpu, GitBranch, BarChart3, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'Golang', 'React', 'Flask', 'Django', 'FastAPI'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Databricks', 'GKE'],
  },
  {
    title: 'Data & Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Snowflake', 'Redis', 'MongoDB', 'BigQuery', 'Vector DB', 'Elasticsearch'],
  },
  {
    title: 'Big Data & Streaming',
    icon: BarChart3,
    skills: ['Apache Spark', 'PySpark', 'Apache Kafka', 'Pub/Sub', 'ETL Pipelines', 'Data Lineage'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Cpu,
    skills: ['LLM Prompting', 'LangChain', 'RAG', 'Vector Search', 'Anomaly Detection', 'Confidence Scoring'],
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    skills: ['SAST', 'SCA', 'SonarQube', 'Snyk', 'RBAC', 'Secrets Management', 'AML / KYC', 'SOC 2'],
  },
  {
    title: 'APIs & Integration',
    icon: Layers,
    skills: ['REST APIs', 'SOAP APIs', 'Webhooks', 'OAuth 2.0', 'OpenAPI', 'Event-Driven Architecture'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    skills: ['GitHub Actions', 'Jenkins', 'CI/CD', 'Terraform', 'Infrastructure as Code', 'Tableau'],
  },
]
