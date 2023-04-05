import { useParams } from 'react-router-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useProfile from './useProfile';
import { getWrapper } from '../utils/test-utils';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}));

describe('useProfile', () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ heroId: '1' });
    });

    it('should fetch heroProfile and return it from redux store', async () => {
        const { result } = renderHook(() => useProfile(), {
            wrapper: getWrapper(),
        });

        await waitFor(() => {
            expect(result.current.stats).toHaveProperty('str');
            expect(result.current.stats).toHaveProperty('int');
            expect(result.current.stats).toHaveProperty('agi');
            expect(result.current.stats).toHaveProperty('luk');
            expect(result.current.stats).toHaveProperty('rest');
        });

        if (result.current.stats !== null) {
            const total = Object.values(result.current.stats).reduce(
                (pre, curr) => pre + curr,
                0
            );
            expect(total).toBeGreaterThan(0);
        }
    });

    it('should update stats when calling setState', async () => {
        const { result } = renderHook(() => useProfile(), {
            wrapper: getWrapper(),
        });

        await waitFor(() => {
            if (result.current.stats !== null) {
                const stats = {
                    str: result.current.stats.str + 1,
                    int: result.current.stats.int - 1,
                    agi: result.current.stats.agi + 1,
                    luk: result.current.stats.luk - 1,
                    rest: result.current.stats.rest,
                };

                act(() => {
                    result.current.setStats(stats);
                });

                expect(result.current.stats).toEqual(stats);
            }
        });
    });
});
