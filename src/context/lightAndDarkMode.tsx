'use client';
import React from 'react';

type LightAndDarkModeContextType = {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void
}

const LightAndDarkModeContext = React.createContext<LightAndDarkModeContextType | null>(null);

export default LightAndDarkModeContext;