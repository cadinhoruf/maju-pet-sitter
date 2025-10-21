"use client";

import { Button } from "@/components/ui/button";
import { CookieManager } from "@/lib/cookie-manager";
import { cn } from "@/lib/utils";
import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CookieConsent({
  variant = "default",
  mode = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    CookieManager.onAccept({
      analytics: true,
      marketing: false,
      functional: true
    });
    setTimeout(() => {
      setHide(true);
    }, 700);
    // Lógica adicional quando o usuário aceita cookies
    console.log("✅ Cookies aceitos - funcionalidades completas habilitadas");
  };

  const decline = () => {
    setIsOpen(false);
    CookieManager.onDecline();
    setTimeout(() => {
      setHide(true);
    }, 700);
    // Lógica quando o usuário recusa cookies
    console.log("🍪 Cookies recusados - funcionalidades limitadas por privacidade");
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (CookieManager.hasConsent()) {
        if (!mode) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error);
    }
  }, [mode]);

  return (
    <>
      {variant === "default" ? (
        <div
          className={cn(
            "right-0 bottom-0 sm:bottom-4 left-0 sm:left-4 z-200 fixed p-4 sm:p-0 w-full sm:max-w-md duration-700",
            !isOpen
              ? "transition-[opacity,transform] translate-y-8 opacity-0"
              : "transition-[opacity,transform] translate-y-0 opacity-100",
            hide && "hidden"
          )}
        >
          <div className="bg-background dark:bg-card shadow-lg border border-border rounded-lg sm:rounded-md">
            <div className="gap-2 grid">
              <div className="flex justify-between items-center p-3 sm:p-4 border-border border-b h-12 sm:h-14">
                <h1 className="font-medium text-base sm:text-lg">Usamos cookies</h1>
                <CookieIcon className="w-4 sm:w-[1.2rem] h-4 sm:h-[1.2rem]" />
              </div>
              <div className="p-3 sm:p-4">
                <p className="font-normal text-muted-foreground text-xs sm:text-sm text-start">
                  <strong>🍪 O que são cookies?</strong><br />
                  São como &quot;lembrancinhas&quot; que deixamos no seu computador para lembrar suas preferências e tornar sua visita mais agradável.
                  <br />
                  <br />
                  <strong>😊 E se eu recusar?</strong><br />
                  Fique tranquilo! Nosso site funciona perfeitamente mesmo assim. Você só não terá algumas coisinhas extras como personalização.
                  <br />
                  <br />
                  <span className="text-xs">
                    Ao clicar em{" "}
                    <span className="font-medium text-black dark:text-white">Aceitar</span>, você
                    nos ajuda a melhorar nosso atendimento.
                  </span>
                </p>
              </div>
              <div className="items-center gap-2 grid grid-cols-2 dark:bg-background/20 p-3 sm:p-4 sm:py-5 border-border border-t">
                <Button onClick={accept} variant="default" className="w-full">
                  Aceitar
                </Button>
                <Button onClick={decline} variant="outline" className="w-full">
                  Recusar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : variant === "small" ? (
        <div
          className={cn(
            "right-0 bottom-0 sm:bottom-4 left-0 sm:left-4 z-200 fixed p-4 sm:p-0 w-full sm:max-w-md duration-700",
            !isOpen
              ? "transition-[opacity,transform] translate-y-8 opacity-0"
              : "transition-[opacity,transform] translate-y-0 opacity-100",
            hide && "hidden"
          )}
        >
          <div className="bg-background dark:bg-card shadow-lg m-0 sm:m-3 border border-border rounded-lg">
            <div className="flex justify-between items-center p-3">
              <h1 className="font-medium text-base sm:text-lg">Usamos cookies</h1>
              <CookieIcon className="w-4 sm:w-[1.2rem] h-4 sm:h-[1.2rem]" />
            </div>
            <div className="-mt-2 p-3">
              <p className="text-muted-foreground text-xs sm:text-sm text-left">
                <strong>🍪 Cookies:</strong> &quot;Lembrancinhas&quot; que deixamos no seu navegador para melhorar sua experiência.
                <br />
                <strong>😊 Se recusar:</strong> Fique tranquilo! O site funciona perfeitamente mesmo assim.
              </p>
            </div>
            <div className="items-center gap-2 grid grid-cols-2 mt-2 p-3 border-t">
              <Button onClick={accept} className="w-full">
                Aceitar
              </Button>
              <Button
                onClick={decline}
                className="w-full"
                variant="outline"
              >
                Recusar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        variant === "minimal" && (
          <div
            className={cn(
              "right-0 bottom-0 sm:bottom-4 left-0 sm:left-4 z-200 fixed p-4 sm:p-0 w-full sm:max-w-[300px] duration-700",
              !isOpen
                ? "transition-[opacity,transform] translate-y-8 opacity-0"
                : "transition-[opacity,transform] translate-y-0 opacity-100",
              hide && "hidden"
            )}
          >
            <div className="bg-background dark:bg-card shadow-lg m-0 sm:m-3 border border-border rounded-lg">
              <div className="flex justify-between items-center p-3 border-border border-b">
                <div className="flex items-center gap-2">
                  <CookieIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="font-medium text-xs sm:text-sm">Aviso de Cookies</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-muted-foreground sm:text-xs">
                  <strong>🍪 Cookies:</strong> &quot;Lembrancinhas&quot; para melhorar sua experiência.<br />
                  <strong>😊 Recusar:</strong> Site funciona perfeitamente!
                </p>
                <div className="items-center gap-2 grid grid-cols-2 mt-3">
                  <Button
                    onClick={accept}
                    variant="default"
                    className="w-full"
                  >
                    Aceitar
                  </Button>
                  <Button
                    onClick={decline}
                    variant="ghost"
                    className="w-full"
                  >
                    Recusar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      )}

    </>
  );
}
