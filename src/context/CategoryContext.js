import React, { Component } from 'react';
import axios from 'axios';

const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends Component {

    token = 'ZIDBFBL5LEX4WXQRLCKE'
    state = { 
        categories: []
     }

    componentDidMount(){
        this.getDataEvents()
    }

    getDataEvents = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        let categories = await axios.get(url)
        console.log(categories.data.categories)

        this.setState({ categories: categories.data.categories})
    }

    render() { 
        return (
            <div>
                <CategoryContext.Provider
                    value={{
                        categories : this.state.categories
                    }}
                >
                    {this.props.children}
                </CategoryContext.Provider>
            </div>
        );
    }
}
 
export default CategoryProvider;
