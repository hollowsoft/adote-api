const PRODUCTION = 'production'
const DEVELOPMENT = 'development'

export const isDev = (): boolean => process.env.NODE_ENV === DEVELOPMENT

export const isProd = (): boolean => process.env.NODE_ENV === PRODUCTION
