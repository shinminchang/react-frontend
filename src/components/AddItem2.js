import React, {Component} from 'react';
import ItemService from './ItemService';
import Header from '../components/Layout';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Back = this.Back.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.sendData(this.state.value);
        //this.props.history.push('/index');
        document.location.href = "/index";
    }

    Back() {
        this.props.history.push('/index');
    }

    render() {
        return (
            <Header title={this.props.title}>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Add Item:
                            <input type="text" value={this.state.value} onChange={this.handleChange}
                                   className="form-control"/>
                        </label><br/>
                        <input type="button" value="back" className="btn btn-primary" onClick={this.Back}/>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>
            </Header>
        );
    }
}

AddItem.defaultProps = {
    title: "AddItem Page"
};

export default AddItem;
