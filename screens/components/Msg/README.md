# Componentes de Mensagens (Msg)

Este diretório contém todos os componentes relacionados ao sistema de mensagens e conversas do iSaúde.

## Estrutura de Arquivos

### Componentes Principais (Lista de Conversas)

- **MsgHeader.jsx** - Cabeçalho da tela de conversas com título e foto do perfil
- **MsgSearchBar.jsx** - Barra de busca para filtrar conversas
- **MsgTabs.jsx** - Abas de navegação (Principal, Arquivados, Solicitações)
- **ConversationItem.jsx** - Item individual de conversa na lista
- **EmptyConversations.jsx** - Ilustração para quando não há conversas
- **RequestNotification.jsx** - Notificação de solicitações de mensagem

### Componentes de Chat Individual

- **ChatHeader.jsx** - Cabeçalho da tela de chat com informações do contato
- **ChatSearchBar.jsx** - Barra de busca dentro do chat
- **MessageBubble.jsx** - Bolha de mensagem individual
- **CallStatus.jsx** - Status de chamadas (recebida/finalizada)
- **MessageInput.jsx** - Input para enviar novas mensagens

## Funcionalidades Implementadas

### Tela Principal de Conversas (Msg.jsx)
- ✅ Navegação entre 3 abas: Principal, Arquivados, Solicitações
- ✅ Busca em conversas por nome ou mensagem
- ✅ Lista de conversas com informações detalhadas
- ✅ Indicadores de mensagens não lidas
- ✅ Badges de verificação para contatos verificados
- ✅ Status de chamadas ativas
- ✅ Ilustração para conversas vazias
- ✅ Notificação de solicitações

### Tela de Chat Individual (Chat.jsx)
- ✅ Cabeçalho com informações do contato
- ✅ Busca dentro do chat
- ✅ Bolhas de mensagem com timestamps
- ✅ Status de chamadas
- ✅ Input para enviar mensagens
- ✅ Suporte a anexos
- ✅ Navegação de volta

## Dados Mockados

- **conversationsData.js** - Dados das conversas organizados por categoria
- **chatMessagesData.js** - Mensagens individuais de cada chat

## Navegação

A navegação entre as telas é implementada usando React Navigation:
- Tela principal: `Msg.jsx`
- Tela de chat: `Chat.jsx` (navegação via `navigation.navigate('Chat', { conversation })`)

## Estilos

Todos os componentes seguem o design system do iSaúde com:
- Cores: Azul principal (#007AFF), Verde para verificação (#34C759)
- Tipografia: Fonte padrão do sistema
- Espaçamentos: Consistentes com o resto do app
- Sombras e bordas: Sutis e modernas
