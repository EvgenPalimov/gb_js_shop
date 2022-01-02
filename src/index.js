import getProductList from "./mock/data";
import renderGoodsList from "./showcase";
import './css/main.css';
import { send } from './utils.js'

const API_URL = 'http://localhost:3000/api/v1/';

let productList = [];
let cart = [];

send((error) => {console.log(error)}, (res) => {
    let list = JSON.parse(res);
    productlist = list;
    renderGoodsList(productList);
}, `${API_URL}/catalog`)



