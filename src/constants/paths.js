import {IS_SERVER,PORT} from './env';

export const API_PATH = IS_SERVER ? `http://localhost:${PORT}/api` : '/api';
export const PROJECT_RESOURCE = `${API_PATH}/poop`;
