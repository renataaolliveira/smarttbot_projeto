import React from 'react';
import { getLastPrice, getDailyVolume, getCurrenciesInfo } from './api_function';



class FirstComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: {},
        };
        //bind the functions here if necessary (only if array)
    };

    componentDidMount() {

        const respPrice = getLastPrice();

        console.log(respPrice.data);

        const respVolume = getDailyVolume();

        console.log(respVolume.data);

        const respInfo = getCurrenciesInfo();

        console.log(respInfo.data);



        //this.setState({ price: resp.data })

    
    }

    render() {
        return (
            <div>
                <ul>
                    { /* for (const key in object) {
                        if (object.hasOwnProperty(key)) {
                            const element = object[key];
                            
                        */ }
                      
                </ul>
            </div>
        );
    };
    

};

export default FirstComponent;