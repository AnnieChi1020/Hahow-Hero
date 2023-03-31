import { createSlice } from '@reduxjs/toolkit';

export interface Hero {
    id: string;
    name: string;
    image: string;
}

export interface HeroProfile {
    str: number;
    int: number;
    agi: number;
    luk: number;
}

interface HeroProps {
    heroList: Hero[];
    heroProfiles: {
        [key: string]: HeroProfile;
    };
}

const initialState: HeroProps = {
    heroList: [],
    heroProfiles: {},
};

const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        setHeroList(state, action) {
            state.heroList = action.payload;
        },
        setHeroProfile(state, action) {
            const { heroId, profile } = action.payload;
            state.heroProfiles[heroId] = profile;
        },
    },
});

export const { setHeroList, setHeroProfile } = heroSlice.actions;

export default heroSlice.reducer;
