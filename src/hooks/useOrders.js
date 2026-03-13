import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useOrders = () => useAsyncData(() => apiClient.getOrders(), []);
