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
    heroProfileIsFetching: boolean;
}

export const initialState: HeroProps = {
    heroList: [],
    heroProfiles: {},
    heroProfileIsFetching: false,
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
        setHeroProfileIsFetching(state, action) {
            state.heroProfileIsFetching = action.payload;
        },
    },
});

export const { setHeroList, setHeroProfile, setHeroProfileIsFetching } =
    heroSlice.actions;

export default heroSlice.reducer;
