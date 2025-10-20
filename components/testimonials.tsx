"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Bob",
    date: "15 de setembro, 2025",
    image: "/BOB.jpg",
    text: "Meu pai viaja muito e eu fico sozinho. A tia Maju cuida e me leva para passear quase todos os dias. Fora as brincadeiras que ela faz comigo, eu amo muito!"
  },
  {
    id: 2,
    name: "Nala",
    date: "2 de setembro, 2025",
    image: "/NALA.jpg",
    text: "Quando a mamãe viajou, ela não pôde me levar com ela. Então, ela chamou a Maria Julia, e ela veio cuidar de mim. Eu realmente gostei da Maria Julia; nos divertimos muito, ela é muito amorosa e cuida do meu bem-estar."
  },
  {
    id: 3,
    name: "Vanilla",
    date: "2 de setembro, 2025",
    image: "/VANILLA.jpg",
    text: "Tenho que tomar medicamentos regularmente. Quando meus pais decidiram sair de férias, eles estavam preocupados com minha alimentação. Eles chamaram a pet sitter Maria Julia, e nos gostamos muito!"
  },
  {
    id: 4,
    name: "Sunny",
    date: "15 de novembro, 2024",
    image: "/SUNNY-2.jpg",
    text: "A Maria Julia é incrível! Ela cuidou de Sunny por 2 semanas e ele voltou feliz e saudável. Ela é muito amorosa e cuida do seu pet como se fosse seu próprio. Recomendo muito!"
  },
  {
    id: 5,
    name: "Pluto",
    date: "15 de novembro, 2024",
    image: "/PLUTO.jpg",
    text: "Meus pais estavam preocupados com minha saúde, pois eu não queria comer nada. A Maria Julia ajudou muito, explicou as peculiaridades da alimentação de papagaios e ofereceu um plano alimentar especial. Delicioso!"
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted/50 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-bold text-foreground text-4xl">
            O que meus clientes dizem sobre mim
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            O que os pets diriam sobre mim, segundo seus donos.
          </p>
        </motion.div>

        <div className="gap-8 grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-card shadow-lg p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6">
                <div className="relative mx-auto rounded-full w-24 h-24 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - Pet cliente da Maria Julia Pet Sitter`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    title={`Depoimento de ${testimonial.name}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <h3 className="mb-2 font-bold text-card-foreground text-xl">
                {testimonial.name}
              </h3>

              <div className="bg-primary mx-auto mb-4 w-12 h-0.5"></div>

              <p className="mb-4 text-muted-foreground italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <p className="font-medium text-primary text-sm">
                {testimonial.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
