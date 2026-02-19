import { GraduationCap, Languages } from "lucide-react"

const education = {
  degree: "Gestão da Tecnologia da Informação",
  institution: "Centro Universitário Internacional (Uninter)",
  location: "Paraná, BR",
  period: "Fev 2020 - Abr 2024",
}

const languages = [
  {
    name: "Português",
    level: "Nativo",
    description: null,
  },
  {
    name: "Inglês",
    level: "Intermediário",
    description: "Básico (fala) • Intermediário (leitura)",
  },
]

export function Education() {
  return (
    <section id="formacao" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2">{"// education && languages"}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Formacao </span>
            <span className="text-primary">& Idiomas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Graduacao</p>
                <h3 className="font-semibold text-lg text-foreground">{education.degree}</h3>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-primary font-medium">{education.institution}</p>
              <p className="text-sm text-muted-foreground">{education.location}</p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Idiomas</h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground">{lang.name}</p>
                    {lang.description && (
                      <p className="text-sm text-muted-foreground">{lang.description}</p>
                    )}
                  </div>
                  <span className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-md">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
