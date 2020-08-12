import React,{Component} from 'react';

class Productdescp extends Component{
    render(){
        const description="AirPods are wireless Bluetooth earbuds created by Apple. They were first released on December 13, 2016, with a 2nd generation released in 2019 and the premium AirPods Pro released later that year. Within two years, they became Apple's most popular accessory, turning into a critical success and viral sensation."
        const style={fontSize:'1.5em'};
        return(<p style={style}>{description}</p>); 
    }
}

export default Productdescp;