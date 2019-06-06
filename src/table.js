import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './App.css';

class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        const {arr} = this.state;
        axios.get('http://13.233.166.249:9090/productapp/product/overView').then( (response)=> {
            console.log(response);
            this.setState({ arr: response.data.productsList });
            console.log(arr);
        }).catch(function (err) {
            console.log(err, 'ERROR');
        })
    }

    render() {
        console.log("in render", this.state.arr);
        return (
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={this.state.arr}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="productGroupName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#ff6200" />
                    
                </BarChart>
            </div>
        );
    }
}
export default table;