import { PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <PawPrint className="mr-2 w-8 h-8 text-primary" />
            <h4 className="font-bold text-2xl">Maria Julia Pet Sitter</h4>
          </div>
          <p className="mb-4 text-muted-foreground">
            Cuidando de cada pet com carinho – serviços completos de cuidado em Araraquara.
          </p>
          <p className="text-muted-foreground text-sm">
            © Criado por <a href="https://rufino-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Ricardo Rufino</a> - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
