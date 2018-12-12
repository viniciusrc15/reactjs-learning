import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        product: {}
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await api.get(`/products/${id}`);
        this.setState({ product: res.data });
    }
    render() {
        const { product } = this.state;
        return (
            <div>
                <div className='product-info'>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>URL: <a href={product.url}>{product.url}</a></p>
                </div>
                <Link className='back' to='/'>Voltar</Link>
            </div>
        )
    }
}