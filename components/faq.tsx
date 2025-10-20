"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona o serviço de pet sitting?",
    answer: "O pet sitting inclui visitas ao seu pet em casa, onde cuido da alimentação, brincadeiras, administração de medicamentos (se necessário), limpeza do ambiente e observação do comportamento. Cada visita dura de 1 a 2 horas, dependendo das necessidades do seu pet."
  },
  {
    question: "Você trabalha com todos os tipos de pets?",
    answer: "Sim! Trabalho com cães, gatos, pássaros, roedores e outros pets. Cada animal tem suas particularidades e me adapto às necessidades específicas de cada um."
  },
  {
    question: "Qual é a área de atendimento?",
    answer: "Atendo em Araraquara e região. Para locais mais distantes, entre em contato para verificar a disponibilidade e possíveis taxas de deslocamento."
  },
  {
    question: "Como é feito o pagamento?",
    answer: "O pagamento pode ser feito em dinheiro, PIX ou transferência bancária. Para contratos mensais, ofereço condições especiais de pagamento."
  },
  {
    question: "Você oferece serviços de emergência?",
    answer: "Sim, tenho disponibilidade para situações urgentes. Entre em contato pelo WhatsApp para verificar a disponibilidade no momento."
  },
  {
    question: "Como posso acompanhar o cuidado do meu pet?",
    answer: "Sempre envio relatórios detalhados de cada visita, incluindo fotos e descrição das atividades realizadas. Você pode acompanhar tudo pelo WhatsApp."
  },
  {
    question: "Você tem experiência com pets idosos ou com necessidades especiais?",
    answer: "Sim, tenho experiência com pets idosos, com deficiências, pós-cirúrgicos e com necessidades especiais. Cada pet recebe cuidados personalizados de acordo com suas particularidades."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-bold text-foreground text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços e cuidados
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card border rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center hover:bg-muted/50 px-6 py-4 w-full text-left transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-card-foreground text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
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
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
