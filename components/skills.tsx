import { Code2, Cloud, Database, GitBranch, Workflow, BarChart3, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens & Processamento",
    icon: Code2,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["Python", "SQL", "Bash", "PySpark"],
  },
  {
    title: "Cloud - AWS",
    icon: Cloud,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["S3", "RDS/Aurora", "Redshift", "Athena", "EMR", "Lambda", "ECS", "EC2", "VPC", "IAM", "CloudWatch", "Step Functions"],
    highlighted: true,
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["PostgreSQL", "MySQL", "Oracle"],
  },
  {
    title: "DevOps & Containers",
    icon: GitBranch,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["Git", "GitHub", "Docker", "Docker Compose"],
  },
  {
    title: "Orquestracao & IaC",
    icon: Workflow,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["Apache Airflow", "AWS Step Functions", "Amazon DMS", "dbt", "Terraform"],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    skills: ["Metabase", "Power BI", "Qlik Sense"],
  },
]

const certification = {
  title: "AWS Cloud Practitioner",
  period: "Nov 2025 - Nov 2028",
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">{"// skills.config"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Stack </span>
            <span className="text-primary">Tecnico</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl border transition-colors ${
                category.highlighted
                  ? "border-primary bg-card"
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${category.iconBg} flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <h3 className="font-mono text-foreground font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Certificação</p>
              <p className="font-semibold text-foreground">{certification.title}</p>
              <p className="text-sm text-primary">{certification.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
