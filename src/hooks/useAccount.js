import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useAccount = () => useAsyncData(() => apiClient.getAccount(), []);
