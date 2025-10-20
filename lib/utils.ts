import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Aplica máscara de telefone no formato (xx) xxxxx-xxxx
 * @param value - Valor do telefone sem formatação
 * @returns Telefone formatado com máscara
 */
export function formatPhoneNumber(value: string): string {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '')

  // Aplica a máscara baseada no tamanho
  if (numbers.length <= 2) {
    return numbers
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  } else if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  } else {
    // Limita a 11 dígitos (DDD + 9 dígitos)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }
}

/**
 * Remove a máscara do telefone, retornando apenas os números
 * @param value - Telefone com ou sem máscara
 * @returns Apenas os números do telefone
 */
export function unformatPhoneNumber(value: string): string {
  return value.replace(/\D/g, '')
}
