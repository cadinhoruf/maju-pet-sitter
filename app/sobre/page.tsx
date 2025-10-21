import { Clock, Heart, PawPrint, Shield, Star } from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-foreground text-3xl">
                Minha paixão pelos animais
              </h2>
              <p className="mb-6 text-muted-foreground text-lg">
                Desde pequena, sempre tive uma conexão especial com os animais.
                Cresci cercada por pets e aprendi desde cedo que cada animal tem
                sua personalidade única e merece amor, respeito e cuidados
                especiais.
              </p>
              <p className="mb-6 text-muted-foreground text-lg">
                Minha experiência com animais começou em casa, cuidando dos
                nossos próprios pets, e se expandiu quando comecei a ajudar
                amigos e vizinhos com seus companheiros de quatro patas. Foi aí
                que percebi que poderia transformar minha paixão em uma
                profissão.
              </p>
              <p className="mb-8 text-muted-foreground text-lg">
                Hoje, com anos de experiência em cuidados pet, me especializo em
                entender as necessidades individuais de cada animal, garantindo
                que eles se sintam seguros, felizes e bem cuidados na ausência
                de seus tutores.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-6 rounded-full w-32 h-32">
                  <Heart className="w-16 h-16 text-primary" />
                </div>
                <h3 className="mb-4 font-bold text-foreground text-2xl">
                  Minha Missão
                </h3>
                <p className="text-muted-foreground">
                  Proporcionar cuidado, amor e atenção personalizada para cada
                  pet, garantindo que eles se sintam seguros e felizes enquanto
                  seus tutores estão ausentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-gray-900 text-3xl">
              Meus Valores
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Os princípios que guiam meu trabalho e minha relação com cada pet
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 text-xl">Amor</h3>
              <p className="text-gray-600">
                Trato cada pet com carinho genuíno, como se fosse meu próprio
                animal de estimação.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                Segurança
              </h3>
              <p className="text-gray-600">
                Priorizo sempre a segurança e bem-estar do animal em todas as
                situações.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                Pontualidade
              </h3>
              <p className="text-gray-600">
                Respeito rigorosamente os horários combinados para alimentação e
                passeios.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 text-xl">
                Excelência
              </h3>
              <p className="text-gray-600">
                Busco sempre oferecer o melhor cuidado possível para cada pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-gray-900 text-3xl">
              Minha Experiência
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Conhecimento prático e teórico em cuidados com animais
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="mb-4 font-semibold text-gray-900 text-2xl">
                Cuidados Básicos
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Alimentação adequada e horários regulares
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Administração de medicamentos
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Limpeza e higiene do ambiente
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Observação de comportamento e saúde
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="mb-4 font-semibold text-gray-900 text-2xl">
                Atividades e Exercícios
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Passeios seguros e divertidos
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Brincadeiras e estímulos mentais
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Socialização com outros animais
                </li>
                <li className="flex items-center">
                  <PawPrint className="mr-3 w-5 h-5 text-primary" />
                  Exercícios adequados para cada idade
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/90 py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-4 font-bold text-white text-3xl">
            Pronta para cuidar do seu pet com carinho
          </h2>
          <p className="mb-8 text-primary-foreground text-xl">
            Entre em contato e vamos conversar sobre as necessidades do seu
            melhor amigo
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-primary transition-colors"
            >
              Entrar em contato
            </Link>
            <Link
              href="/#servicos"
              className="inline-flex items-center hover:bg-white px-8 py-4 border-2 border-white rounded-lg font-semibold text-white hover:text-primary transition-colors"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
