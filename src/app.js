import React from 'react';
import getLastPrice from './api_function';


class FirstComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: [],
        };
        //bind the functions here if necessary
    };

    componentDidMount() {

        const resp = getLastPrice;

        console.log(resp.data);

        this.setState({ price: resp.data })

    
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.price.map(coin=>(<li>{coin.last}</li>))}
                </ul>
            </div>
        );
    };
    

};

export default FirstComponent;