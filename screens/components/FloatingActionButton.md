# FloatingActionButton

Um componente de botão flutuante com menu expansível que utiliza as imagens SVG do diretório `assets/bottomShortcuts`.

## Funcionalidades

- ✅ Botão principal com transição suave de rotação
- ✅ Menu expansível com 3 opções (Nota, Fotos e Vídeos, Pulse)
- ✅ Transições suaves de abertura e fechamento
- ✅ Uso dos SVGs originais do projeto
- ✅ Mudança de ícone do botão principal (BottomImage ↔ BottomImageActive)
- ✅ Posicionamento absoluto para sobrepor outros elementos

## Como usar

### Importação básica

```jsx
import FloatingActionButton from '../components/FloatingActionButton';

// Em seu componente
<FloatingActionButton />
```

### Exemplo completo

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

const MyPage = () => {
  return (
    <View style={styles.container}>
      {/* Seu conteúdo aqui */}
      
      {/* FloatingActionButton posicionado absolutamente */}
      <FloatingActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

## Opções disponíveis

O componente inclui 3 opções pré-configuradas:

1. **Nota** - Ícone roxo, para funcionalidades de notas
2. **Fotos e Vídeos** - Ícone vermelho, para compartilhamento de mídia
3. **Pulse** - Ícone teal, para funcionalidades de saúde

## Personalização

Para personalizar as ações de cada opção, edite a função `handleOptionPress` no componente:

```jsx
const handleOptionPress = (optionId) => {
  switch (optionId) {
    case 'nota':
      // Lógica para Nota
      break;
    case 'fotos':
      // Lógica para Fotos e Vídeos
      break;
    case 'pulse':
      // Lógica para Pulse
      break;
  }
};
```

## Dependências

- `react-native-svg` - Para renderização dos SVGs
- `react-native-svg-transformer` - Para importação de SVGs como componentes

## Arquivos SVG utilizados

- `BottomImage.svg` - Estado normal do botão
- `BottomImageActive.svg` - Estado ativo do botão
- `Nota.svg` - Ícone da opção Nota
- `FotosEVideos.svg` - Ícone da opção Fotos e Vídeos
- `Pulse.svg` - Ícone da opção Pulse

## Estilização

O componente usa as seguintes cores principais:
- Botão principal: `#4267F6` (azul)
- Nota: `#8B5CF6` (roxo)
- Fotos e Vídeos: `#EF4444` (vermelho)
- Pulse: `#14B8A6` (teal)

## Animações

- **Botão principal**: Rotação de 45° ao abrir/fechar
- **Opções**: Escala, translação vertical e opacidade
- **Duração**: 300ms para todas as animações
