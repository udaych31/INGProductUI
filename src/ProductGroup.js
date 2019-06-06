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
import 'react-accessible-accordion/dist/fancy-example.css';
//import Button from '@material-ui/core/Button';
import './App.css';

class ProductGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            arr2:[],
            arr3:[]
        }
    }

    componentDidMount(){
        const{arr}=this.state;
        var global=this;
        axios.get('http://13.233.166.249:9090/productapp/product/getAllProducts').then(function(response){
            console.log(response.data.productsList);
            global.setState({arr:response.data.productsList});
        }).catch(function(err){
            console.log(err,'ERROR');
        })
    }

    handleClick = (item)=> {
        const{arr2}=this.state;
        console.log(item.productGroupId);
        var g=this;
        axios.get('http://13.233.166.249:9090/productapp/product/getSubProducts?productGroupId='+item.productGroupId).then(function(response){
           console.log(response.data.productList);
           g.setState({arr2:response.data.productList})
            console.log(g.state.arr2);
        }).catch(function(err){
            console.log(err);
        })
    }

    getDetails=(data)=>{
        this.props.history.push('./productDetails/'+data.productId);
    }

    render(){
        console.log(this.state.arr)
        return(
          <div className="box">
            {this.state.arr.map((item,i)=>{
                return(
                      <Accordion key={i}>
                        <AccordionItem>
                            <AccordionItemHeading onClick={()=>this.handleClick(item)}>
                                <AccordionItemButton>
                                    {item.productGroupName}-{item.count}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    {this.state.arr2.map((item1,j)=>{
                                        return(
                                            <AccordionItemPanel key={j}>
                                                <button className="box" onClick={()=>{this.getDetails(item1)}}>{item1.productName}</button>
                                            </AccordionItemPanel>
                                        )
                                    })}
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    
                    </Accordion>
                    )
                })}
            </div>
        )
    }
}
export default ProductGroup;