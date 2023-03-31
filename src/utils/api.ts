import { Hero, HeroProfile } from '../redux/heroSlice';

interface HeroProfileRes {
    heroId: string;
    profile: HeroProfile;
}

const HERO_API = process.env.REACT_APP_HERO_API;

export const fetchHeroes = async (): Promise<Hero[]> => {
    try {
        const res = await fetch(`${HERO_API}/heroes`);
        if (res.status !== 200) {
            throw new Error('Network response was not ok');
        }
        const data: Hero[] = await res.json();
        return data;
    } catch (error) {
        // console.error('Error:', error);
        throw error;
    }
};

export const fetchHeroProfile = async (
    heroId: string
): Promise<HeroProfileRes | undefined> => {
    try {
        const res = await fetch(`${HERO_API}/heroes/${heroId}/profile`);

        if (res.status !== 200) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        // console.error('Error:', error);
        throw error;
    }
};

export const updateHeroProfile = async (
    heroId: string,
    profile: HeroProfile
): Promise<boolean> => {
    let isUpdated = false;
    try {
        const res = await fetch(`${HERO_API}/heroes/${heroId}/profile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });
        if (res.status === 200) {
            isUpdated = true;
        }
    } catch (error) {
        // console.error('Error:', error);
        throw error;
    }
    return isUpdated;
};
