import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>em 2025</span>
        </div>
      </div>
    </footer>
  )
}
