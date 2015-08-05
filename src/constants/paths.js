import {IS_SERVER} from './env'

export const API_PATH = IS_SERVER ? `http://localhost:${process.env.PORT}/api` : '/api'
export const PROJECT_RESOURCE = `${API_PATH}/project`
