// React dom render npm i react react-dom
//  npm i webpack webpack-cli 
// npm i ts-loader this is a webpack loader that allows you to transpile TypeScript files to JavaScript. Aso use the webpack.config.js file to configure the loader.

import { createRoot } from 'react-dom/client';
import App from './components/app';

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);