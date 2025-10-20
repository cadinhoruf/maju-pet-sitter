import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PawPrint } from "lucide-react";

const testimonials = [
  {
    name: "Bob",
    date: "28 de outubro, 2024",
    text: "Meus pais estavam preocupados com minha saúde, pois eu não queria comer nada. A Maria Julia ajudou muito, explicou as peculiaridades da alimentação de papagaios e ofereceu um plano alimentar especial. Delicioso!"
  },
  {
    name: "Nala",
    date: "3 de março, 2024",
    text: "Quando a mamãe viajou para o exterior, ela não pôde me levar com ela. Então, ela chamou a Maria Julia, e ela veio cuidar de mim por 2 semanas. Eu realmente gostei da Maria Julia; nos divertimos muito e aproveitamos longos passeios."
  },
  {
    name: "Vanilla",
    date: "12 de dezembro, 2024",
    text: "Tenho que tomar medicamentos regularmente. Quando meus pais decidiram sair de férias, eles estavam preocupados com minha alimentação. Eles chamaram a pet sitter Maria Julia, e nos gostamos muito!"
  },
  {
    name: "Sunny",
    date: "12 de dezembro, 2024",
    text: "Tenho que tomar medicamentos regularmente. Quando meus pais decidiram sair de férias, eles estavam preocupados com minha alimentação. Eles chamaram a pet sitter Maria Julia, e nos gostamos muito!"
  },
  {
    name: "Pluto",
    date: "12 de dezembro, 2024",
    text: "Tenho que tomar medicamentos regularmente. Quando meus pais decidiram sair de férias, eles estavam preocupados com minha alimentação. Eles chamaram a pet sitter Maria Julia, e nos gostamos muito!"
  }
];

export default function Clientes() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-muted/50 to-muted/30 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="mb-6 font-bold text-foreground text-4xl">
            O que meus clientes dizem sobre mim
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground text-xl">
            O que os pets diriam sobre mim, segundo seus donos.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card shadow-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-primary/10 mr-4 rounded-full w-12 h-12">
                    <PawPrint className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.date}</p>
                  </div>
                </div>
                <div className="bg-primary/20 mb-4 w-full h-px"></div>
                <p className="text-muted-foreground italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
