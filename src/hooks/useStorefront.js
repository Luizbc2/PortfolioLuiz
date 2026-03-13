import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useStorefront = () => useAsyncData(() => apiClient.getStorefront(), []);
