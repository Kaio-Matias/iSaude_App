# Sistema de Stories (Instagram-like) com Transição 3D

Este diretório contém todos os componentes relacionados ao sistema de stories do iSaúde, similar ao Instagram, agora com transições 3D estilo cubo e swipe horizontal.

## 🎯 Funcionalidades Implementadas

### **Transições 3D Estilo Cubo**
- ✅ **Rotação 3D** - Efeito de rotação em Y durante transições
- ✅ **Escala dinâmica** - Zoom in/out durante transições
- ✅ **Perspectiva 3D** - Efeito de profundidade realista
- ✅ **Animações suaves** - Transições fluidas entre stories

### **Swipe Horizontal**
- ✅ **Swipe para direita** - Volta ao story anterior
- ✅ **Swipe para esquerda** - Avança para próximo story
- ✅ **Threshold configurável** - 25% da largura da tela
- ✅ **Spring animation** - Volta suave quando swipe insuficiente

### **Múltiplos Stories por Usuário**
- ✅ **Contagem de stories** - Indicador visual de quantos stories cada usuário tem
- ✅ **Progresso de visualização** - Anel de progresso mostrando stories vistos
- ✅ **Indicador de não vistos** - Badge vermelho com contagem
- ✅ **Navegação entre stories** - Tap e swipe para navegar

### **Suporte a Vídeos**
- ✅ **Reprodução automática** - Vídeos começam automaticamente
- ✅ **Pausa com long press** - Mantenha pressionado para pausar
- ✅ **Duração personalizada** - Cada vídeo pode ter duração específica
- ✅ **Indicador de pausa** - Mostra quando o story está pausado

### **Interface Melhorada**
- ✅ **Contador de stories** - "1 / 5" no canto superior direito
- ✅ **Barra de progresso** - Uma barra por story do usuário
- ✅ **Header com perfil** - Foto e nome do usuário
- ✅ **Input de comentário** - Campo para enviar comentários
- ✅ **Botão de fechar** - X no canto superior direito

## 🧩 Componentes

### **StoryViewer.jsx**
- Componente principal do visualizador de stories
- Transições 3D com efeito cubo
- Gestos de swipe horizontal
- Suporte a imagens e vídeos
- Pausa com long press
- Interface completa do story

### **StoryFlash.jsx**
- Componente de preview do story (círculo clicável)
- Indicadores de stories não vistos
- Anel de progresso para stories vistos
- Animação de press
- Nome do usuário

### **StoriesContainer.jsx**
- Container horizontal dos stories
- Gerenciamento de estado
- Integração com o feed

## 🎨 Animações 3D

### **Transição de Stories**
```javascript
// Animação 3D de cubo
const animations = [
  Animated.timing(translateX, {
    toValue: direction * screenWidth * 0.8,
    duration: 400,
    useNativeDriver: true,
  }),
  Animated.timing(rotateY, {
    toValue: direction * 0.3,
    duration: 400,
    useNativeDriver: true,
  }),
  Animated.timing(scale, {
    toValue: 0.9,
    duration: 200,
    useNativeDriver: true,
  }),
];
```

### **Transformações 3D**
```javascript
transform: [
  { translateX },
  { rotateY: rotateY.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-20deg', '20deg'],
    })},
  { scale },
  { perspective: 1000 },
],
```

## 📱 Gestos

### **Swipe Horizontal**
- **Swipe direita (>25%)** - Story anterior
- **Swipe esquerda (>25%)** - Próximo story
- **Swipe insuficiente** - Volta à posição original com spring

### **Long Press**
- **Mantém pressionado** - Pausa o story/vídeo
- **Solta** - Retoma a reprodução

### **Tap**
- **Tap esquerda** - Story anterior
- **Tap direita** - Próximo story

## 🎬 Suporte a Mídia

### **Imagens**
- Formato: JPG, PNG, WebP
- Duração: Configurável (padrão: 5s)
- ResizeMode: "cover"

### **Vídeos**
- Formato: MP4, WebM
- Duração: Baseada no arquivo ou configurável
- Autoplay: Sim
- Loop: Não
- Controles: Pausa com long press

## 📊 Estrutura de Dados

```javascript
const storyData = {
  id: '1',
  username: 'Dra. Maria Genda',
  profileImage: 'https://...',
  media: [
    {
      id: '1-1',
      url: 'https://...',
      type: 'image', // ou 'video'
      duration: 5000, // em ms
    },
    // ... mais mídias
  ],
};
```

## 🚀 Como Usar

### **Renderizar Stories**
```javascript
import { StoriesContainer } from './components/Stories';

<StoriesContainer stories={storiesData} />
```

### **Abrir Story Individual**
```javascript
import { useStoryViewer } from './pages/App';

const { showGlobalStory } = useStoryViewer();

const handlePress = (story) => {
  showGlobalStory(story);
};
```

## 🎯 Próximas Funcionalidades

- [ ] **Stories em grupo** - Navegar entre usuários
- [ ] **Reações** - Emojis e reações rápidas
- [ ] **Comentários** - Sistema de comentários em tempo real
- [ ] **Stickers** - Adicionar stickers aos stories
- [ ] **Filtros** - Filtros de imagem em tempo real
- [ ] **Música** - Adicionar música de fundo
- [ ] **Polls** - Enquetes nos stories
- [ ] **Questions** - Caixa de perguntas

## 🔧 Configurações

### **Duração dos Stories**
```javascript
const storyDuration = 5000; // 5 segundos
```

### **Threshold do Swipe**
```javascript
const threshold = screenWidth * 0.25; // 25% da tela
```

### **Animações 3D**
```javascript
const perspective = 1000;
const rotationRange = 20; // graus
const scaleRange = 0.9;
``` 