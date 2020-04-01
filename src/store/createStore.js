import { createStore } from 'redux';

export default (reduces, middleware) => createStore(reduces, middleware);
