import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }
  componentDidMount(){
     $.get("http://127.0.0.1:1128/repos",(res)=>{
        this.setState({repos: JSON.parse(res)});
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.post("http://127.0.0.1:1128/repos", {data: term}, (res)=> {
     $.get("http://127.0.0.1:1128/repos",(res)=>{
        this.setState({repos: JSON.parse(res)});
      })
   })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));