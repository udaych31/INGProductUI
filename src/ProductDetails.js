import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
//import Button from '@material-ui/core/Button';
import './App.css';

class ProductDetails extends Component{

    constructor(props){
    super(props);
    this.state={
            details:[],
            prodId:props.match.params.idParam
        }
    }

    componentDidMount(){
        const{details}=this.state;
        const{prodId}=this.state;
        var global=this;
        axios.get('http://13.233.166.249:9090/productapp/product/getProductDetails?productId='+prodId).then(function(response){
            console.log(response);
            console.log(response.data.productdetils);
            global.setState({details:response.data.productdetils})
        }).catch(function(err){
            console.log(err);
        })
    }

    render(){
        console.log(this.state.details.minInvestment)
        return(
            <div>
                {this.state.details.map((item,i)=>{
                return(
                      <Accordion key={i}>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                   
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                
                                    <table border="1" align="center">
                                    <tbody>
                                        <tr><td><label>Duration</label></td><td>{item.duration}</td></tr>
                                        <tr><td><label>InterestRate</label></td><td>{item.interestRate}</td></tr>
                                        <tr><td><label>MaxInvestment</label></td><td>{item.maxInvestment}</td></tr>
                                        <tr><td><label>MinInvestment</label></td><td>{item.minInvestment}</td></tr>
                                        <tr><td><label>Percentage</label></td><td>{item.percentage}</td></tr>
                                        <tr><td><label>Special</label></td><td>{item.special}</td></tr>
                                        <tr><td><label>Withdrawl</label></td><td>{item.withdrawl}</td></tr>
                                    </tbody>
                                    </table>
                                    
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    )
                })}
            </div>
        )
    }
}
export default ProductDetails;