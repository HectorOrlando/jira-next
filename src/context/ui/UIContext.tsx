import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void
    starDragging: () => void; 
    endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps );