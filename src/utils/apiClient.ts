import type { FetchConfig } from '@aspida/fetch';
import aspida from '@aspida/fetch';
import api from '../../api/$api';
import { API_BASE_PATH, API_ORIGIN } from './envValue';

const fetchConfig: FetchConfig = {
  baseURL: `${API_ORIGIN}${API_BASE_PATH}`,
};

export const apiClient = api(aspida(fetch, fetchConfig));
