import React, { PropsWithChildren } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import heroReducer, { initialState } from '../redux/heroSlice';
import { RootState, AppStore } from '../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = { hero: initialState },
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: { hero: heroReducer },
            preloadedState,
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }
    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function getWrapper() {
    const preloadedState = { hero: initialState };
    const store: AppStore = configureStore({
        reducer: { hero: heroReducer },
        preloadedState,
    });

    function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    return Wrapper;
}
