import dotenv from 'dotenv';
dotenv.config()

export const POLYGON_MAINNET_URL= process.env.POLYGON_MAINNET_URL || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
export const ENJS_CONTRACT_ADDRESS = process.env.ENJS_CONTRACT_ADDRESS || '';
export const ENJS_OWNER_ADDRESS = process.env.ENJS_OWNER_ADDRESS || '';
export const USDTS_CONTRACT_ADDRESS = process.env.USDTS_CONTRACT_ADDRESS || '';
export const USDT_OWNER_ADDRESS = process.env.USDT_OWNER_ADDRESS || '';
export const USDT_LIQUIDTY_ADDRESS = process.env.USDT_LIQUIDTY_ADDRESS || '';
export const ENJUSDT_PRICE_ADDRESS = process.env.ENJUSDT_PRICE_ADDRESS || '';