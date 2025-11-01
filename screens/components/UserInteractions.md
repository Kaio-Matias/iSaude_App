# Funcionalidades de Interação com Perfis de Usuários

Este documento descreve as funcionalidades implementadas para interação com perfis de usuários, baseadas nas imagens fornecidas.

## Componentes Criados

### 1. UserBlockContext.jsx
Contexto global para gerenciar usuários bloqueados.

**Funcionalidades:**
- `blockUser(userId)` - Bloqueia um usuário
- `unblockUser(userId)` - Desbloqueia um usuário
- `isUserBlocked(userId)` - Verifica se um usuário está bloqueado
- `getBlockedUsers()` - Retorna lista de usuários bloqueados

### 2. ProfileOptionsModal.jsx
Modal que exibe as opções do perfil (3 pontos).

**Opções disponíveis:**
- **Sobre esta Conta** - Informações sobre o usuário
- **Denunciar** - Reportar o usuário
- **Bloquear Usuário** - Bloquear o usuário

### 3. BlockConfirmationModal.jsx
Modal de confirmação para bloquear usuário.

**Funcionalidades:**
- Exibe mensagem de confirmação
- Botão "Sim, Bloquear" (vermelho)
- Botão "Voltar" (branco com borda vermelha)
- Explica as consequências do bloqueio

### 4. UserProfileCard.jsx
Componente de cartão de perfil de usuário.

**Funcionalidades:**
- Exibe informações do usuário (foto, nome, verificação, especialidade)
- Estatísticas (publicações, seguidores, seguindo)
- Bio e website
- Botão de ação personalizável (Seguir, Pedir para Seguir, etc.)
- Estado visual de usuário bloqueado
- Botão de desbloquear

## Como Usar

### 1. Configuração Global
Envolva sua aplicação com o `UserBlockProvider`:

```jsx
import { UserBlockProvider } from './components/UserBlockContext';

export default function App() {
  return (
    <UserBlockProvider>
      {/* Sua aplicação */}
    </UserBlockProvider>
  );
}
```

### 2. Usando o UserProfileCard
```jsx
import { UserProfileCard } from './components/UserProfileCard';

const user = {
  id: '1',
  name: 'Dra. Maria Glenda',
  username: 'dra.mariaglen',
  profileImage: 'https://example.com/image.jpg',
  isVerified: true,
  specialty: 'Clínica Geral',
  bio: 'Clínica geral com 15 anos de experiência...',
  website: 'https://dramariaglen.com',
  stats: {
    publications: 124,
    followers: '23k',
    following: 2196,
  },
};

<UserProfileCard
  user={user}
  onProfilePress={(user) => console.log('Perfil clicado:', user.name)}
  actionButtonText="Seguir"
  onActionPress={() => console.log('Seguindo usuário')}
/>
```

### 3. Usando o Contexto
```jsx
import { useUserBlock } from './components/UserBlockContext';

const MyComponent = () => {
  const { blockUser, unblockUser, isUserBlocked } = useUserBlock();
  
  const handleBlock = (userId) => {
    blockUser(userId);
  };
  
  const handleUnblock = (userId) => {
    unblockUser(userId);
  };
  
  const checkIfBlocked = (userId) => {
    return isUserBlocked(userId);
  };
};
```

## Funcionalidades Implementadas

### ✅ Clique na Foto/Nome
- Ao clicar na foto ou nome do usuário, uma função personalizada é executada
- Pode ser usada para navegar para o perfil completo ou outras ações

### ✅ Menu de Opções (3 Pontos)
- Modal com opções: "Sobre esta Conta", "Denunciar", "Bloquear Usuário"
- Design moderno com ícones e cores diferenciadas
- Animações suaves de entrada e saída

### ✅ Bloquear Usuário
- Modal de confirmação antes de bloquear
- Explica as consequências do bloqueio
- Botões de confirmação e cancelamento

### ✅ Estado Visual de Usuário Bloqueado
- Interface específica para usuários bloqueados
- Ícone de pessoa removida
- Mensagem explicativa sobre o bloqueio
- Botão "Desbloquear" para reverter a ação

### ✅ Desbloquear Usuário
- Funcionalidade para desbloquear usuários
- Confirmação visual da ação
- Restauração do estado normal do perfil

## Integração com Componentes Existentes

### PostHeader.jsx
- Adicionado menu de opções nos posts
- Funcionalidade de bloquear usuários diretamente dos posts

### ChatHeader.jsx
- Adicionado menu de opções no chat
- Funcionalidade de bloquear usuários durante conversas

## Página de Exemplo

### UserProfileExample.jsx
Página demonstrativa com:
- 3 perfis de exemplo (Dra. Maria Glenda, Luana Paiva, Dr. João Silva)
- Diferentes estados (verificado, não verificado)
- Diferentes tipos de botões (Seguir, Pedir para Seguir)
- Lista de funcionalidades implementadas

## Navegação

Para acessar a página de exemplo:
1. Vá para "Perfis para seguir"
2. Clique em "Ver Exemplo de Interações"

## Dependências

- `@expo/vector-icons` - Para ícones
- `react-native` - Componentes básicos
- Context API do React - Para gerenciamento de estado global

## Estrutura de Dados do Usuário

```javascript
const user = {
  id: 'string',           // ID único do usuário
  name: 'string',         // Nome completo
  username: 'string',     // Nome de usuário (@username)
  profileImage: 'string', // URL da imagem de perfil
  isVerified: boolean,    // Se o perfil é verificado
  specialty: 'string',    // Especialidade médica
  bio: 'string',          // Biografia
  website: 'string',      // Website (opcional)
  stats: {                // Estatísticas (opcional)
    publications: number,
    followers: string|number,
    following: number,
  },
};
```
