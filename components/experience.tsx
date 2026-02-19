const experiences = [
  {
    title: "Analista de Dados",
    company: "CASSEMS",
    period: "Out 2023 - Presente",
    location: "Mato Grosso do Sul, BR",
    current: true,
    description:
      "Responsável pela engenharia e qualidade dos dados que sustentam a tomada de decisão estratégica da organização.",
    highlights: [
      "Desenvolvimento de views, funções e CTEs em SQL avançado com foco em performance e escalabilidade",
      "Construção e otimização de pipelines ETL para extração, transformação e disponibilização de dados",
      "Modelagem relacional e dimensional para Data Warehouse e suporte analítico",
      "Estruturação de datasets otimizados para consumo em Power BI e Qlik Sense",
      "Implementação de regras de validação e controles de qualidade, garantindo consistência e integridade",
      "Tradução de requisitos de negócio em soluções técnicas orientadas a dados e definição de KPIs",
    ],
  },
  {
    title: "Analista de Dados",
    company: "UNIMED",
    period: "Out 2024 - Nov 2024",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description:
      "Apoio à gestão com dashboards, análises e processos de ETL para garantir qualidade e consistência dos dados.",
    highlights: [
      "Construção de dashboards e relatórios analíticos para apoio à tomada de decisão",
      "Desenvolvimento de processos ETL para garantir qualidade e consistência dos dados",
    ],
  },
  {
    title: "Analista de Sistemas Sênior",
    company: "CASSEMS",
    period: "Out 2022 - Set 2023",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description:
      "Configuração e otimização de sistemas hospitalares em 10 unidades, incluindo migração de bases Oracle.",
    highlights: [
      "Configuração e otimização de módulos do sistema hospitalar em 10 unidades",
      "Migração de bases de dados Oracle com melhoria de 40% na acurácia dos registros médicos",
      "Validação entre sistemas legados e novo sistema, prevenindo inconsistências na transição",
      "Documentação técnica, fluxos padronizados e dashboards para apoio operacional e gerencial",
    ],
  },
  {
    title: "Analista de Negócios",
    company: "CASSEMS",
    period: "Fev 2018 - Out 2022",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description:
      "Mapeamento de processos e levantamento de requisitos para implantação de sistemas hospitalares.",
    highlights: [
      "Mapeamento de processos assistenciais, administrativos e financeiros para definição de requisitos",
      "Coleta de requisitos com equipes multidisciplinares (TI, faturamento, regulação e auditoria)",
      "Condução de treinamentos e implantação em campo em hospitais do Estado",
      "Resultado: curva de adoção do sistema atingiu 75%",
    ],
  },
  {
    title: "Assistente Administrativa",
    company: "CASSEMS",
    period: "Jan 2017 - Jan 2018",
    location: "Mato Grosso do Sul, BR",
    current: false,
    description:
      "Suporte operacional hospitalar e contribuição para implantação do Prontuário Eletrônico do Paciente.",
    highlights: [
      "Organização de registros de faturamento e prontuários médicos",
      "Apoio ao processo de faturamento e validação de dados no sistema MVSOUL",
      "Contribuição para implantação do Prontuário Eletrônico do Paciente (PEP)",
      "Resultado: redução de aproximadamente 20% nas divergências de registros médicos",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">
            {"// work_experience.log"}
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
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
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                >
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
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

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
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
  );
}