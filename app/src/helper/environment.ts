const DEVELOPMENT = 'dev'

export const isDev = (): boolean => process.env.NODE_ENV === DEVELOPMENT
