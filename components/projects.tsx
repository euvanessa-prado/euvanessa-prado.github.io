import { Star, ExternalLink, GitBranch, Layers, Database, Server, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Arquitetura Zero-ETL",
    description: "Implementação de arquitetura Zero-ETL na AWS com replicação contínua de Aurora PostgreSQL para Redshift.",
    icon: GitBranch,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stars: 1,
    tags: ["Terraform", "AWS", "Aurora"],
    moreCount: 1,
    link: "https://github.com/euvanessa-prado/arquitetura_zero_etl",
  },
  {
    title: "Unity Catalog Databricks",
    description: "Implementação do Unity Catalog no Databricks para governança e gerenciamento centralizado de dados.",
    icon: Database,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stars: 0,
    tags: ["Databricks", "Python", "Jupyter"],
    moreCount: 1,
    link: "https://github.com/euvanessa-prado/unity_catalog_databricks",
  },
  {
    title: "Data Ingestion Lakeflow Connect",
    description: "Pipeline de ingestão de dados utilizando Lakeflow Connect para integração de múltiplas fontes.",
    icon: Layers,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stars: 0,
    tags: ["Lakeflow", "Data Ingestion", "ETL"],
    moreCount: 0,
    link: "https://github.com/euvanessa-prado/data_ingestion_lakeflow_connect",
  },
  {
    title: "Terraform for ECS",
    description: "Infraestrutura como código para provisionamento de containers no Amazon ECS com Terraform.",
    icon: Server,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stars: 1,
    tags: ["Terraform", "AWS ECS", "Docker"],
    moreCount: 1,
    link: "https://github.com/euvanessa-prado/terraform_for_ecs",
  },
  {
    title: "Lakehouse Serverless Delta AWS",
    description: "Projeto de Lakehouse serverless utilizando Delta Lake na AWS para arquitetura moderna de dados.",
    icon: Cloud,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stars: 1,
    tags: ["Terraform", "Delta Lake", "AWS"],
    moreCount: 1,
    link: "https://github.com/euvanessa-prado/projeto_lakehouse_serverless_delta_aws",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">{"// pinned_repos"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-foreground">Projetos </span>
            <span className="text-primary">Destacados</span>
          </h2>
          <p className="text-muted-foreground mt-2">Repositórios fixados no meu GitHub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${project.iconBg} flex items-center justify-center`}>
                  <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                </div>
                <div className="flex items-center gap-3">
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  )}
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="font-mono text-foreground font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
                {project.moreCount > 0 && (
                  <span className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                    +{project.moreCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="https://github.com/euvanessa-prado" target="_blank" rel="noopener noreferrer">
              <GitBranch className="w-4 h-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
