import getProductList from "./mock/data";
import renderGoodsList from "./showcase";
import './css/main.css'

const productList = getProductList(20);

renderGoodsList(productList);