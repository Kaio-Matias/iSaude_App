import React, { createContext, useContext, useState } from 'react';
import { FeedContext } from '../components/FeedContext';

// Importações das telas
import FeedBody from '../components/feedComponents/FeedBody';
import HomeFeed from '../pages/HomeFeed';
import { Search } from '../pages/PagesBottomBar/Explore';
import { Health } from '../pages/PagesBottomBar/Health';
import { Msg } from '../pages/PagesBottomBar/Msg';

// Importando o FloatingActionButton
import FloatingActionButton from '../components/FloatingActionButton';

// Ícones
import HomeIcon from '../../assets/bottomBar/Home.svg';
import SearchIcon from '../../assets/bottomBar/Search.svg';
import HealthIcon from '../../assets/bottomBar/Health.svg';
import ConversationIcon from '../../assets/bottomBar/Conversation.svg';
import BlueHomeIcon from '../../assets/bottomBar/BlueIcons/BlueHome.svg';
import BlueSearchIcon from '../../assets/bottomBar/BlueIcons/BlueSearch.svg';
import BlueHealthIcon from '../../assets/bottomBar/BlueIcons/BlueHealth.svg';
import BlueConversationIcon from '../../assets/bottomBar/BlueIcons/BlueConversation.svg';

const InícioTab = () => {
  const { showHomeFeed } = useContext(FeedContext);
  return (
    <>
      {showHomeFeed ? <HomeFeed /> : <FeedBody />}
      <FloatingActionButton />
    </>
  );
};

export const TAB_CONFIG = {
  'Início': {
    component: InícioTab,
    icons: {
      active: BlueHomeIcon,
      inactive: HomeIcon,
    },
  },
  'Explorar': {
    component: Search,
    icons: {
      active: BlueSearchIcon,
      inactive: SearchIcon,
    },
  },
  'Minha Saúde': {
    component: Health,
    icons: {
      active: BlueHealthIcon,
      inactive: HealthIcon,
    },
  },
  'Conversas': {
    component: Msg,
    icons: {
      active: BlueConversationIcon,
      inactive: ConversationIcon,
    },
  },
};
