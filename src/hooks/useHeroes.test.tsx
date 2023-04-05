import { renderHook, waitFor } from '@testing-library/react';
import useHeroes from './useHeroes';
import { getWrapper } from '../utils/test-utils';

describe('useHeroes', () => {
    it('should fetch heroList and return it from redux store', async () => {
        const { result } = renderHook(() => useHeroes(), {
            wrapper: getWrapper(),
        });

        expect(result.current).toEqual([]);

        await waitFor(() => {
            expect(Array.isArray(result.current)).toBe(true);
            expect(result.current[0]).toHaveProperty('id');
            expect(result.current[0]).toHaveProperty('name');
            expect(result.current[0]).toHaveProperty('image');
        });
    });
});
