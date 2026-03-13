import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const usePromotions = () => useAsyncData(() => apiClient.getPromotions(), []);
