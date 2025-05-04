import { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
    plugins: [
        lineClamp,
    ],
};

export default config;