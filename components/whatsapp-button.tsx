"use client";

import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  service?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function WhatsAppButton({
  children,
  service,
  className = "",
  variant = "primary"
}: WhatsAppButtonProps) {
  const sendWhatsAppMessage = (service?: string) => {
    let message = `Olá! Gostaria de saber mais sobre seus serviços de pet sitting/dog walking.`;

    if (service !== "necessidades específicas") {
      message = `Olá! Gostaria de contratar o serviço: ${service}. Podemos conversar sobre os detalhes?`;
    } else if (service === "necessidades específicas") {
      message = `Olá! Gostaria de saber mais sobre seus serviços de necessidades específicas. Podemos conversar sobre os detalhes?`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5516996443057?text=${encodedMessage}`, '_blank');
  };

  const baseClasses = "inline-flex items-center font-semibold transition-colors";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg",
    secondary: "bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg"
  };

  return (
    <button
      onClick={() => sendWhatsAppMessage(service)}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <Phone className="mr-2 w-5 h-5" />
      {children}
    </button>
  );
}
