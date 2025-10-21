/**
 * Gerenciador de cookies para o site
 * Lida com consentimento, armazenamento e funcionalidades baseadas em cookies
 */

export interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
}

export class CookieManager {
  private static readonly COOKIE_NAME = 'cookieConsent';
  private static readonly PREFERENCES_NAME = 'cookiePreferences';

  /**
   * Verifica se o usuário já deu consentimento
   */
  static hasConsent(): boolean {
    if (typeof document === 'undefined') return false;
    return document.cookie.includes(`${this.COOKIE_NAME}=true`);
  }

  /**
   * Salva o consentimento do usuário
   */
  static saveConsent(preferences: Partial<CookiePreferences> = {}): void {
    if (typeof document === 'undefined') return;

    const defaultPreferences: CookiePreferences = {
      analytics: true,
      marketing: false,
      functional: true,
      timestamp: Date.now(),
      ...preferences
    };

    // Salva o consentimento básico
    document.cookie = `${this.COOKIE_NAME}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    // Salva as preferências detalhadas
    localStorage.setItem(this.PREFERENCES_NAME, JSON.stringify(defaultPreferences));
  }

  /**
   * Remove o consentimento (quando o usuário recusa)
   */
  static removeConsent(): void {
    if (typeof document === 'undefined') return;

    // Remove o cookie de consentimento
    document.cookie = `${this.COOKIE_NAME}=false; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

    // Remove as preferências
    localStorage.removeItem(this.PREFERENCES_NAME);

    // Remove cookies de analytics se existirem
    this.clearAnalyticsCookies();
  }

  /**
   * Obtém as preferências salvas
   */
  static getPreferences(): CookiePreferences | null {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem(this.PREFERENCES_NAME);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  /**
   * Verifica se analytics está permitido
   */
  static isAnalyticsAllowed(): boolean {
    const preferences = this.getPreferences();
    return preferences?.analytics === true;
  }

  /**
   * Limpa cookies de analytics
   */
  private static clearAnalyticsCookies(): void {
    if (typeof document === 'undefined') return;

    // Lista de cookies comuns de analytics
    const analyticsCookies = [
      '_ga',
      '_ga_',
      '_gid',
      '_gat',
      '_fbp',
      '_fbc',
      'utm_',
      'fbclid'
    ];

    // Remove cookies de analytics
    document.cookie.split(';').forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      if (analyticsCookies.some(pattern => cookieName.startsWith(pattern))) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      }
    });
  }

  /**
   * Desabilita Google Analytics quando cookies são recusados
   */
  static disableAnalytics(): void {
    if (typeof window === 'undefined') return;

    // Desabilita Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }

    // Remove scripts de analytics
    const analyticsScripts = document.querySelectorAll('script[src*="google-analytics"], script[src*="gtag"]');
    analyticsScripts.forEach(script => script.remove());
  }

  /**
   * Ações a serem executadas quando o usuário recusa cookies
   */
  static onDecline(): void {
    console.log('🍪 Usuário recusou cookies - aplicando restrições de privacidade');

    // Remove consentimento
    this.removeConsent();

    // Desabilita analytics
    this.disableAnalytics();

    // Pode adicionar outras ações aqui, como:
    // - Desabilitar tracking de conversões
    // - Remover pixels do Facebook
    // - Desabilitar heatmaps
    // - etc.
  }

  /**
   * Ações a serem executadas quando o usuário aceita cookies
   */
  static onAccept(preferences?: Partial<CookiePreferences>): void {
    console.log('✅ Usuário aceitou cookies - funcionalidades completas habilitadas');

    // Salva consentimento
    this.saveConsent(preferences);

    // Reabilita analytics se permitido
    if (preferences?.analytics !== false) {
      // Recarrega a página para aplicar as mudanças
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }
}

// Declaração global para TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
