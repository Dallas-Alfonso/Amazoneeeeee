import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';


const initalState= {};
const reducer = combineReducers({
    productList: productListReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const store = createStore(reducer, initalState, compose(applyMiddleware(thunk)));
export default store;