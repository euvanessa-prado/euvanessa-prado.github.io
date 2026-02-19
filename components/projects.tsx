import {
  ExternalLink,
  GitBranch,
  Database,
  Server,
  Cloud,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Lakehouse Serverless - AWS",
    year: "2026",
    description:
      "Arquitetura Data Lakehouse na AWS com Delta Lake, validação por camada (Raw, Staged, Curated), ingestão via DMS Serverless e processamento com AWS Glue (Spark).",
    icon: Cloud,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tags: [
      "Delta Lake",
      "AWS Glue",
      "Step Functions",
      "Terraform",
      "Great Expectations",
    ],
    link: "https://github.com/euvanessa-prado/projeto_lakehouse_serverless_delta_aws",
  },
  {
    title: "Nextcloud - AWS",
    year: "2025",
    description:
      "Migração completa entre regiões AWS com ECS, Aurora PostgreSQL, EFS e ALB. Containers versionados com Docker e redução de custos de 58,9%.",
    icon: Server,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tags: ["ECS", "Aurora", "Docker", "Terraform", "CloudWatch"],
    link: "https://github.com/euvanessa-prado/terraform_for_ecs",
  },
  {
    title: "Arquitetura Zero-ETL",
    year: "2025",
    description:
      "Replicação contínua de Aurora PostgreSQL para Redshift, eliminando pipelines ETL tradicionais. Transformações em modelo ELT com dbt e orquestração via MWAA (Airflow).",
    icon: GitBranch,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tags: ["Aurora", "Redshift", "dbt", "Airflow", "Terraform"],
    link: "https://github.com/euvanessa-prado/arquitetura_zero_etl",
  },
  {
    title: "Unity Catalog - Databricks",
    year: "2025",
    description:
      "Governança e gerenciamento centralizado de dados com Unity Catalog no Databricks, incluindo controle de acesso, catálogo e linhagem de dados.",
    icon: Database,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tags: ["Databricks", "Python", "Unity Catalog"],
    link: "https://github.com/euvanessa-prado/unity_catalog_databricks",
  },
  {
    title: "Data Ingestion - Lakeflow",
    year: "2025",
    description:
      "Pipeline de ingestão de dados com Lakeflow Connect para integração de múltiplas fontes em fluxo unificado e estruturado.",
    icon: Layers,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tags: ["Lakeflow", "Data Ingestion", "ETL"],
    link: "https://github.com/euvanessa-prado/data_ingestion_lakeflow_connect",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">
            {"// pinned_repos"}
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Projetos </span>
            <span className="text-primary">em Destaque</span>
          </h2>

          <p className="text-muted-foreground mt-2">
            Arquiteturas reais desenvolvidas para estudo e aplicação técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${project.iconBg} flex items-center justify-center`}
                >
                  <project.icon
                    className={`w-6 h-6 ${project.iconColor}`}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>

              <h3 className="font-mono text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}

                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="gap-2 bg-transparent"
            asChild
          >
            <a
              href="https://github.com/euvanessa-prado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="w-4 h-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
