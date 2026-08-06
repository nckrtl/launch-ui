import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import React from 'react';
import { createSelectorCreator, lruMemoize } from 'reselect';
import { TooltipProvider } from '../storybook-utils/components/ui/tooltip';
import '../styles/globals.css';

if (typeof window !== 'undefined') {
    (window as any).createSelectorCreator = (window as any).createSelectorCreator || createSelectorCreator;
    (window as any).lruMemoize = (window as any).lruMemoize || lruMemoize;
}

const withTooltipProvider = (Story: React.ComponentType) => (
    <TooltipProvider delayDuration={0} ariaLabel="Tooltip">
        <Story />
    </TooltipProvider>
);

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withTooltipProvider,
        withThemeByClassName({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
};

export default preview;
