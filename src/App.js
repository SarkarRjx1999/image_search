import React from 'react'
import SearchBar from './searchBar';
import unsplash from './api/unsplash';
import ImageList from './imgList';
class App extends React.Component {
  
  state= { img : [] };

   onSearchSubmit = async (term) => {
    const resp = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({img : resp.data.results});
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList imgs={this.state.img}/>
      </div>
    );
  }
}

export default App