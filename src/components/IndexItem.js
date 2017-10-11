import React, {Component} from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';
import Header from './Layout';

class IndexItem extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.addItemService = new ItemService();
    }

    componentWillMount() {
        axios.get('http://localhost:4200/items')
            .then(response => {
                console.log(response);
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:48572/Appapiv2/idFind')
            .then(response => {
                console.log(response.status);
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i}/>;
            })
        }
    }

    render() {
        return (
            <Header title={this.props.title}>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </Header>
        );
    }
}

IndexItem.defaultProps = {
    title: "index Page"
};

export default IndexItem;
