import { apiClient } from '../data/apiClient';
import { useAsyncData } from './useAsyncData';
export const useCatalog = (filters) => useAsyncData(() => apiClient.getCatalog(filters), [filters.search, filters.platform, filters.category, filters.tag, filters.sort, filters.minPrice, filters.maxPrice, filters.promotion]);
