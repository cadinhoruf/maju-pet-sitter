"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "O que eu ofereço para o seu pet?",
    answer: "Ofereço cuidados completos incluindo alimentação, brincadeiras, administração de medicamentos, limpeza do ambiente e observação do comportamento. Cada pet recebe atenção personalizada e carinhosa."
  },
  {
    question: "O que faz uma pet sitter?",
    answer: "Uma pet sitter cuida do seu pet quando você não pode estar presente, garantindo que ele se sinta seguro, feliz e bem cuidado. Inclui alimentação, exercícios, brincadeiras e muito carinho."
  },
  {
    question: "Posso deixar meu pet com você?",
    answer: "Sim! Tenho experiência com diversos tipos de pets e me adapto às necessidades específicas de cada animal. Seu pet ficará em boas mãos com muito amor e cuidado."
  },
  {
    question: "Posso contratar o serviço de pet sitter só por um dia?",
    answer: "Claro! Ofereço serviços flexíveis, desde uma única visita até contratos mensais. Você pode contratar conforme sua necessidade, seja para um dia ou períodos mais longos."
  },
  {
    question: "Posso solicitar o serviço para mais de um pet?",
    answer: "Sim! Posso cuidar de múltiplos pets da mesma família. Cada animal recebe atenção individual e personalizada, respeitando suas particularidades e necessidades."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-12 grid lg:grid-cols-2">
          {/* FAQ Content */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 font-bold text-foreground text-4xl">
                FAQ
              </h2>
              <p className="text-muted-foreground text-lg">
                Talvez você encontre a resposta para a sua dúvida aqui.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="pb-4 border-muted/30 border-b"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="flex justify-between items-center hover:bg-muted/30 px-4 py-3 rounded-lg w-full text-left transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-semibold text-card-foreground text-lg">
                      {faq.question}
                    </h3>
                    <span className="text-muted-foreground text-2xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-1">
            <div className="flex justify-center">
              <div className="relative">
                <div className="relative rounded-full w-full max-w-lg overflow-hidden">
                  <Image
                    src="/FAQ.png"
                    alt="Cachorro curioso e atento - FAQ Maria Julia Pet Sitter"
                    width={500}
                    height={600}
                    className="brightness-90 rounded-full w-full h-auto object-cover"
                    priority
                    loading="eager"
                    title="Pet curioso e atento"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
