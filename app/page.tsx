import { AnimatedSection } from "@/components/animated-section";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CheckCircle, Clock, Heart, PawPrint, Shield } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden font-lexend">
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <AnimatedSection delay={0}>
              <h1 className="mb-6 font-bold text-5xl md:text-6xl text-accent-foreground">
                Seu pet merece o
                <motion.span
                  className="bg-clip-text bg-linear-to-br from-primary to-primary/70 text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {" "}
                  melhor{" "}
                </motion.span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mx-auto mb-6 max-w-4xl text-muted-foreground text-xl md:text-2xl leading-relaxed">
                Preparada para dar ao seu pet toda a atenção e cuidado que ele
                precisa, com carinho, dedicação e experiência profissional.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <p className="mx-auto mb-8 max-w-3xl text-muted-foreground text-lg">
                Cuidados personalizados, passeios seguros e muito amor para o
                seu melhor amigo. Porque quando você não pode estar presente, eu
                estou aqui para garantir que ele se sinta amado e bem cuidado.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12">
                <WhatsAppButton variant="primary" className="text-lg">
                  Entrar em contato
                </WhatsAppButton>
                <Link
                  href="#servicos"
                  className="inline-flex items-center hover:bg-primary px-8 py-4 border-2 border-primary rounded-lg font-semibold text-primary hover:text-primary-foreground text-lg transition-colors"
                >
                  <PawPrint className="mr-2 w-5 h-5" />
                  Ver serviços
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust indicators */}
            <AnimatedSection delay={0.8}>
              <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-4xl">
                <div className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mx-auto mb-3 rounded-full w-16 h-16">
                    <Heart className="animate-collapse-down w-7 h-7 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Cuidado com amor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cada pet é único e recebe atenção personalizada
                  </p>
                </div>

                <div className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mx-auto mb-3 rounded-full w-16 h-16 transition-colors duration-300">
                    <Shield className="animate-collapse-down w-7 h-7 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Segurança garantida
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Experiência e responsabilidade em cada cuidado
                  </p>
                </div>

                <div className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mx-auto mb-3 rounded-full w-16 h-16 transition-colors duration-300">
                    <Clock className="w-7 h-7 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Horário de atendimento
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Consultar horário de atendimento para mais informações
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="sobre"
        className="y-16"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            {/* Image Column */}
            <div className="lg:col-span-1">
              <div className="flex justify-center">
                <div className="relative rounded-full w-full max-w-md overflow-hidden">
                  <Image
                    src="/BOB-2.jpg"
                    alt="Cachorro feliz brincando com bolinha - Maria Julia Pet Sitter"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="lg:col-span-1">
              <h2 className="mb-6 font-bold text-foreground text-4xl">
                Faça ele mais feliz e mais saudável
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground text-lg">
                  Eu sei o quanto você ama o bixinho e o quanto ele faz parte da
                  sua vida. Por isso, cuido de cada animal com atenção, carinho
                  e respeito, como se fosse meu.
                </p>
                <p className="text-muted-foreground text-lg">
                  Com experiência em cuidados, bem-estar e comportamento animal,
                  ofereço serviços personalizados para atender às necessidades
                  do seu melhor amigo — sempre com paciência, amor e dedicação.
                </p>
                <p className="text-muted-foreground text-lg">
                  Cada pet tem sua própria personalidade, e eu acredito que cada
                  um merece um cuidado único. Você pode ter certeza de que seu
                  companheiro estará feliz, seguro e bem cuidado comigo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Me Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-bold text-foreground text-4xl">
                Por que você precisa da minha ajuda ?
              </h2>
              <p className="text-muted-foreground text-lg">
                Talvez você fique fora por um tempo ou esteja ocupado demais
                para dar ao seu pet os cuidados que ele merece. É aí que meus
                serviços entram em ação.
              </p>

              {/* Icon List */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Eu garanto que o seu pet esteja se alimentando da forma
                    correta
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Cuido da medicação pontualmente, caso necessário;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Levo seu cão para passear nos horários combinados;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Você não precisa mais pedir ajuda a amigos para ficar com o
                    seu amigo;
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground text-sm italic">
                <span className="text-primary">* </span>
                <span>
                  Posso oferecer cuidados pontuais ou regulares, de acordo com a
                  sua{" "}
                </span>
                <span className="text-primary">necessidade</span>
                <span>.</span>
              </p>
            </div>

            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative rounded-full w-full max-w-md overflow-hidden">
                <Image
                  src="/SUNNY.jpg"
                  alt="Cachorro feliz em cima do sofá"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hero Section */}
      <section id="servicos" className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="mb-6 font-bold text-foreground text-4xl">
            Meus Serviços
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-muted-foreground text-xl">
            Cuidados personalizados para o seu pet, com carinho e
            profissionalismo
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid lg:grid-cols-2">
            {/* Pet Sitting Service */}
            <div className="flex flex-col bg-card shadow-sm p-8 border rounded-lg h-full">
              <div className="mb-8 text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-20 h-20">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h2 className="mb-4 font-bold text-card-foreground text-3xl">
                  Cuido do seu Pet
                </h2>
                <p className="mb-6 font-bold text-md text-primary">
                  a partir de R$ 25 por visita
                </p>
              </div>

              <div className="space-y-4 mb-8 grow">
                <h3 className="mb-4 font-semibold text-card-foreground text-lg">
                  O que inclui:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Alimentação nos horários corretos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Administração de medicamentos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Brincadeiras e estímulos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Limpeza do ambiente
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Observação de comportamento
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Relatório detalhado da visita
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-muted-foreground">
                Fico com o seu pet, cuido da alimentação, faço brincadeiras para
                mantê-lo feliz e ativo, e mantenho o cantinho dele sempre limpo
                e confortável.
              </p>

              <div className="mt-auto text-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-colors"
                >
                  Contratar serviço
                </Link>
              </div>
            </div>

            {/* Dog Walking Service */}
            <div className="flex flex-col bg-card shadow-sm p-8 border rounded-lg h-full">
              <div className="mb-8 text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-20 h-20">
                  <PawPrint className="w-10 h-10 text-primary" />
                </div>
                <h2 className="mb-4 font-bold text-card-foreground text-3xl">
                  Levo seu cão para passear
                </h2>
                <p className="mb-6 font-bold text-md text-primary">
                  a partir de R$ 25 por passeio
                </p>
              </div>

              <div className="space-y-4 mb-8 grow">
                <h3 className="mb-4 font-semibold text-card-foreground text-lg">
                  O que inclui:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Passeio no horário combinado
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Exercícios adequados para a idade
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Socialização com outros cães
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Cuidado com necessidades fisiológicas
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Retorno seguro para casa
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3 w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Relatório do passeio
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-muted-foreground">
                Levo seu cachorro para um passeio no horário que você escolher,
                garantindo que ele se exercite, socialize e desestresse. Cuido
                para que suas necessidades sejam atendidas e que ele volte
                feliz, seguro e relaxado para casa.
              </p>

              <div className="mt-auto text-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-colors"
                >
                  Contratar serviço
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-gray-900 text-3xl">
                Serviços Adicionais
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600 text-lg">
                Cuidados extras para garantir o bem-estar completo do seu pet
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-3">
              <div className="bg-white shadow-sm p-6 rounded-lg text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-xl">
                  Cuidados Especiais
                </h3>
                <p className="mb-4 text-gray-600">
                  Administração de medicamentos, cuidados pós-cirúrgicos e
                  atenção especial para pets idosos ou com necessidades
                  especiais.
                </p>
              </div>

              <div className="bg-white shadow-sm p-6 rounded-lg text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-xl">
                  Visitas de Emergência
                </h3>
                <p className="mb-4 text-gray-600">
                  Disponibilidade para situações urgentes, garantindo que seu
                  pet nunca fique desamparado quando você precisar.
                </p>
              </div>

              <div className="bg-white shadow-sm p-6 rounded-lg text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-xl">
                  Acompanhamento Regular
                </h3>
                <p className="mb-4 text-gray-600">
                  Planos de cuidado contínuo para pets que precisam de atenção
                  regular, com preços especiais para contratos mensais.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-gray-900 text-3xl">
                Informações de Preços
              </h2>
              <p className="text-muted-foreground text-sm">
                Os valores estão sujeitos a alteração conforme a necessidade do
                pet e do dono. Entre em contato para mais informações.
              </p>
            </div>

            <div className="bg-white mx-auto p-8 border border-gray-200 rounded-lg max-w-4xl">
              <div className="gap-8 grid md:grid-cols-2">
                <div>
                  <h3 className="mb-6 font-semibold text-gray-900 text-2xl">
                    Pet Sitting
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Visita única (1-2 horas)
                      </span>
                      <span className="font-semibold text-gray-900">R$ 25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Visita estendida (3-4 horas)
                      </span>
                      <span className="font-semibold text-gray-900">R$ 40</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Cuidado noturno</span>
                      <span className="font-semibold text-gray-900">R$ 60</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Pacote semanal (5 visitas)
                      </span>
                      <span className="font-semibold text-gray-900">
                        R$ 100
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 font-semibold text-gray-900 text-2xl">
                    Dog Walking
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Passeio curto (30 min)
                      </span>
                      <span className="font-semibold text-gray-900">R$ 25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Passeio longo (1 hora)
                      </span>
                      <span className="font-semibold text-gray-900">R$ 35</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Passeio duplo (2 cães)
                      </span>
                      <span className="font-semibold text-gray-900">R$ 45</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">
                        Pacote semanal (5 passeios)
                      </span>
                      <span className="font-semibold text-gray-900">
                        R$ 120
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 mt-8 p-4 rounded-lg">
                <p className="text-gray-600 text-sm text-center">
                  <strong>Desconto especial:</strong> Para múltiplos pets ou
                  contratos mensais, entre em contato para valores
                  personalizados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 mx-auto p-8 border border-primary/20 rounded-xl max-w-4xl">
            <h3 className="mb-4 font-semibold text-foreground text-xl">
              Precisa de algo mais específico?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Cada pet é único e pode ter necessidades especiais. Entre em
              contato para conversarmos sobre cuidados personalizados, horários
              flexíveis ou qualquer dúvida que você tenha.
            </p>
            <WhatsAppButton
              service="necessidades específicas"
              variant="outline"
            >
              Falar sobre necessidades específicas
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section id="contato" className="bg-primary py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-4 font-bold text-primary-foreground text-3xl">
            Precisa de alguém para cuidar ou passear com seu doguinho?
          </h2>
          <p className="mb-8 text-primary-foreground/80 text-xl">
            Entre em contato comigo, será um prazer para mim cuidar do seu pet!
          </p>
          <WhatsAppButton variant="secondary">Iniciar conversa</WhatsAppButton>
        </div>
      </section>

    </div>
  );
}
