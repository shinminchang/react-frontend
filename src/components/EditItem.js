import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
import Header from './Layout';
import { BrowserHistory } from 'react-router'
import TableRow from './TableRow';

class EditItem extends Component {

  constructor(props) {
      super(props);
      this.addItemService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {value: '', items: ''};
      this.Back = this.Back.bind(this);
  }

    componentWillMount(){
        axios.get('http://localhost:4200/items')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                return <TableRow obj={object} key={i} />;
            })
        }
    }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ value: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.updateData(this.state.value,this.props.match.params.id);
    this.props.history.push('/index');
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
                Edit Item:
                <input type="text" value={this.state.value.item} onChange={this.handleChange}  className="form-control"/>
              </label><br/>
            <input type="button" value="back" className="btn btn-primary" onClick={this.Back}/>
              <input type="submit" value="Update" className="btn btn-primary"/>
            </form>

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

EditItem.defaultProps = {
    title: "EditItem Page"
};

export default EditItem;
