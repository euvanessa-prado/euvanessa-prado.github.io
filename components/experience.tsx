const experiences = [
  {
    title: "Data Analyst",
    company: "CASSEMS",
    period: "Out 2023 - Presente",
    location: "Mato Grosso do Sul, BR",
    current: true,
    description: "Transformo dados brutos em insights estratégicos, aumentando a eficiência na tomada de decisão.",
    highlights: [
      "Executo e otimizo pipelines ETL/ELT de ponta a ponta (extração, limpeza, normalização e transformação), melhorando a confiabilidade dos dados",
      "Desenvolvo a camada de modelagem de dados para suporte a BI, garantindo que o fluxo de extração seja resiliente e performático",
      "Construo dashboards interativos com Power BI e Qlik Sense, reduzindo o tempo de análise manual",
      "Construo views e funções SQL para padronizar regras de negócio, reduzindo o tempo de processamento de consultas complexas",
      "Apoio às áreas de negócio na interpretação de KPIs e implementação de métricas orientadas por dados",
      "Asseguro qualidade, consistência e integridade dos dados por meio de regras de validação, reduzindo discrepâncias em 30%",
    ],
  },
  {
    title: "Data Analyst",
    company: "UNIMED",
    period: "Out 2024 - Nov 2024",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description: "Construção de dashboards, análises e processos de ETL para qualidade dos dados e apoio à gestão.",
    highlights: [
      "Construção de dashboards e relatórios analíticos",
      "Processos de ETL para garantir qualidade dos dados",
      "Apoio à gestão na tomada de decisões baseadas em dados",
    ],
  },
  {
    title: "IT Systems Analyst",
    company: "CASSEMS",
    period: "Out 2022 - Set 2023",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description: "Configuração e otimização de sistemas hospitalares com foco em migração de dados.",
    highlights: [
      "Configurei e otimizei módulos do sistema hospitalar em 10 unidades, garantindo alinhamento operacional e regulatório",
      "Migração de bases de dados Oracle para 10 unidades hospitalares, garantindo integridade dos registros médicos",
      "Melhoria de 40% na acurácia dos dados após processo de migração",
    ],
  },
  {
    title: "Analista de Negócios",
    company: "CASSEMS",
    period: "Fev 2018 - Out 2022",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description: "Validação de bases, documentação técnica e suporte durante implantação de sistemas.",
    highlights: [
      "Validei bases entre sistemas legados e novo sistema, prevenindo inconsistências durante a transição",
      "Desenvolvi documentação técnica, fluxos padronizados e dashboards analíticos para apoiar decisões operacionais",
      "Prestei suporte técnico especializado durante e após o go-live, garantindo estabilidade do sistema",
      "Resultado: Melhoria de 40% na acurácia dos dados e implantação concluída dentro do prazo em todas as unidades",
    ],
  },
  {
    title: "Assistente Administrativa",
    company: "CASSEMS",
    period: "Jan 2017 - Jan 2018",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description: "Suporte aos fluxos operacionais hospitalares e implementação do Prontuário Eletrônico.",
    highlights: [
      "Organizei registros de faturamento e prontuários médicos",
      "Atualizei e validei dados, apoiei o processo de faturamento",
      "Contribuí para a implantação do Prontuário Eletrônico do Paciente (PEP) no Hospital em Campo Grande - MS",
      "Realizei conferências de dados financeiros e integrações no sistema hospitalar MVSOUL",
      "Resultado: Redução de ~20% das divergências em registros médicos",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">{"// work_experience.log"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-foreground">Experiência </span>
            <span className="text-primary">Profissional</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                          Atual
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period} • {exp.location}
                    </p>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
