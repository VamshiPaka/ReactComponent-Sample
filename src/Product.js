import React,{Component} from 'react';
import Productdescp from './Productdescp';
import "./Product.css"

class Product extends Component{
    render() {
        return(<div className="card"><h2 className="name">Airpods</h2>
        <img src="https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Apple products"></img>
            <h5 style={{fontSize:'2em',margin:'2px'}}>Apple airpods pro</h5>
            <Productdescp />
            </div>);

    }
}
export default Product;