import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from "./reducers/cartReducers"

const cartItems = Cookie.getJSON("cartItems")  || [];

const initalState= { cart: { cartItems } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const store = createStore(reducer, initalState, composeEnhancer(applyMiddleware(thunk)));
export default store;