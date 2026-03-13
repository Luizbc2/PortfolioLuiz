import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useGameDetails = (slug) => useAsyncData(() => apiClient.getGameDetails(slug), [slug]);
