import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useDeliveredKeys = () => useAsyncData(() => apiClient.getDeliveredKeys(), []);
