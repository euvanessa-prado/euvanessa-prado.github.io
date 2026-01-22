"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const techIcons = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Databricks", icon: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { name: "Airflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg" },
  { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
]

export function Hero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-muted-foreground mb-4">
            <span className="text-primary">$</span> whoami
          </p>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 font-mono">
            Vanessa Aida
          </h1>
          
          <div className="flex items-center gap-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
              Data Engineer
            </h2>
            <span 
              className={`inline-block w-3 h-8 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
            />
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
            Focada em transformar dados complexos em soluções confiáveis e de alto impacto. 
            Trabalho construindo pipelines eficientes, organizando ecossistemas de dados e 
            transformando informação bruta em insights que apoiam decisões de negócio.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://github.com/euvanessa-prado" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/vanessa-aida/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="mailto:vanessa@email.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm font-mono">Tech Stack:</span>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors cursor-default p-2"
                  title={tech.name}
                >
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
