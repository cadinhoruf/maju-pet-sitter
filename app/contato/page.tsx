"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string({ error: "Nome é obrigatório" }).min(5, {
    message: "Nome deve ter pelo menos 3 caracteres.",
  }),
  message: z.string({ error: "Mensagem é obrigatória" }).min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contato() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Formatar a mensagem para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${data.name}.

${data.message}

Gostaria de saber mais sobre seus serviços de pet sitting/dog walking.`;

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/5516996443057?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-12 grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="mb-8 font-bold text-foreground text-3xl">
                Informações de contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(16) 99644-3057</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">mariajulia.petsitter@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Localização</h3>
                    <p className="text-muted-foreground">Araraquara - SP</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Horário de atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Domingo: 7h às 19h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e envie sua mensagem diretamente para o WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Conte-me sobre seu pet e como posso ajudar..."
                              {...field}
                              className="resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 w-4 h-4" />
                      Enviar para WhatsApp
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
