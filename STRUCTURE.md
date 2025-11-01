# Estrutura do Projeto

## Organização de Arquivos

### 📁 screens/
Contém todas as telas da aplicação
- `HomeScreen.tsx` - Tela principal da aplicação
- `index.ts` - Arquivo de índice para exportar todas as screens

### 📁 components/
Contém todos os componentes reutilizáveis organizados por categoria

#### 📁 components/layout/
Componentes de layout e estrutura
- `Container.tsx` - Container principal com SafeAreaView

#### 📁 components/ui/
Componentes de interface do usuário
- `EditScreenInfo.tsx` - Componente para exibir informações de edição
- `ScreenContent.tsx` - Componente para conteúdo de tela

#### 📁 components/index.ts
Arquivo de índice para facilitar imports dos componentes

### 📁 assets/
Recursos estáticos (imagens, ícones, etc.)

### 📁 app/
Configurações do Expo Router (se usado)

## Como Usar

### Importando Screens
```typescript
import { HomeScreen } from './screens';
```

### Importando Components
```typescript
import { Container, ScreenContent } from './components';
```

### Importando Componentes Específicos
```typescript
import { Container } from './components/layout/Container';
import { ScreenContent } from './components/ui/ScreenContent';
```

## Benefícios da Nova Estrutura

1. **Organização**: Separação clara entre screens e components
2. **Reutilização**: Components organizados por tipo facilitam a reutilização
3. **Manutenibilidade**: Estrutura escalável para projetos maiores
4. **Imports Limpos**: Arquivos de índice facilitam os imports 