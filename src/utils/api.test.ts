import { fetchHeroes, fetchHeroProfile, updateHeroProfile } from './api';

describe('fetchHeroes', () => {
    it('should fetch heroes', async () => {
        const heroes = await fetchHeroes();
        expect(Array.isArray(heroes)).toBe(true);
        expect(heroes[0]).toHaveProperty('id');
        expect(heroes[0]).toHaveProperty('name');
        expect(heroes[0]).toHaveProperty('image');
    });
});

describe('fetchHeroProfile', () => {
    it('should fetch hero profile', async () => {
        const heroProfile = await fetchHeroProfile('1');
        expect(heroProfile).toHaveProperty('str');
        expect(heroProfile).toHaveProperty('int');
        expect(heroProfile).toHaveProperty('agi');
        expect(heroProfile).toHaveProperty('luk');
    });
});

describe('updateHeroProfile', () => {
    it('should update hero profile', async () => {
        const isUpdated = await updateHeroProfile('1', {
            str: 1,
            int: 8,
            agi: 10,
            luk: 6,
        });
        expect(isUpdated).toBe(true);
    });

    it('should not update hero profile', async () => {
        const isUpdated = await updateHeroProfile('1', {
            str: 10,
            int: 10,
            agi: 10,
            luk: 10,
        });
        expect(isUpdated).toBe(false);
    });
});
