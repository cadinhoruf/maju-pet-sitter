# 📊 Configuração do Google Analytics 4

## 🚀 Passo a Passo Completo

### 1. **Criar Conta no Google Analytics**

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Clique em "Começar a medir"
3. Preencha os dados da sua conta:
   - **Nome da conta**: Maria Julia Pet Sitter
   - **Nome da propriedade**: Maria Julia Pet Sitter Website
   - **URL do site**: https://marijulia-pet-sitter.vercel.app
   - **Categoria**: Animais de estimação
   - **Fuso horário**: (UTC-03:00) Brasília

### 2. **Obter o ID de Medição**

1. Após criar a propriedade, vá em **"Administração"** (ícone de engrenagem)
2. No menu lateral, clique em **"Fluxos de dados"**
3. Clique em **"Web"**
4. Copie o **ID de medição** (formato: G-XXXXXXXXXX)

### 3. **Configurar Variáveis de Ambiente**

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione a seguinte linha:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Substitua `G-XXXXXXXXXX` pelo seu ID de medição real

### 4. **Configurações Avançadas do GA4**

#### **Eventos Personalizados Recomendados:**

- `contact_form_submit` - Quando alguém envia o formulário
- `whatsapp_click` - Quando clicam no botão do WhatsApp
- `service_interest` - Quando mostram interesse em um serviço específico

#### **Conversões Importantes:**

- Envio do formulário de contato
- Clique no botão do WhatsApp
- Visualização da página de serviços

### 5. **Verificar se Está Funcionando**

1. Execute o projeto: `bun run dev`
2. Abra o site no navegador
3. Acesse o Google Analytics em tempo real
4. Navegue pelo site e verifique se os dados aparecem

### 6. **Configurações de Privacidade**

#### **Aviso de Cookies (Opcional mas Recomendado):**

```tsx
// Adicione este componente se quiser avisar sobre cookies
export function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
      <p className="text-sm text-gray-600 mb-2">
        Este site usa cookies para melhorar sua experiência e analisar o
        tráfego.
      </p>
      <button
        onClick={() => setAccepted(true)}
        className="bg-primary text-white px-4 py-2 rounded text-sm"
      >
        Aceitar
      </button>
    </div>
  );
}
```

## 📈 Métricas Importantes para Acompanhar

### **Tráfego:**

- Usuários únicos
- Sessões
- Páginas mais visitadas
- Tempo de permanência

### **Conversões:**

- Formulários enviados
- Cliques no WhatsApp
- Visualizações de serviços

### **Comportamento:**

- Taxa de rejeição
- Páginas por sessão
- Tempo médio na página

## 🔧 Comandos Úteis

```bash
# Instalar dependências
bun install

# Executar em desenvolvimento
bun run dev

# Build para produção
bun run build

# Verificar se o GA está funcionando
# Abra o DevTools > Network > Procure por "google-analytics"
```

## 🚨 Troubleshooting

### **GA não está funcionando:**

1. Verifique se o arquivo `.env.local` existe
2. Confirme se o ID de medição está correto
3. Verifique o console do navegador por erros
4. Teste em modo incógnito

### **Dados não aparecem:**

- Pode levar até 24-48 horas para aparecer dados
- Use o "Tempo real" no GA para verificar imediatamente
- Verifique se não há bloqueadores de anúncios ativos

## 📱 Configuração para Mobile

O Google Analytics 4 já está otimizado para mobile, mas você pode:

1. Configurar eventos específicos para mobile
2. Acompanhar conversões de WhatsApp (muito usado no mobile)
3. Monitorar performance em diferentes dispositivos

## 🎯 Próximos Passos

1. Configure conversões no GA4
2. Crie relatórios personalizados
3. Configure alertas para picos de tráfego
4. Integre com Google Search Console
5. Configure remarketing (opcional)

---

**✅ Tudo configurado!** Seu site agora está coletando dados de forma eficiente e respeitando a privacidade dos usuários.
