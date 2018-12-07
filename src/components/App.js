import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import '../css/App.css';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  }

  componentDidMount() {
    this.onSearchSubmit('apple');
  }

  render() {
    return (
      <div className="top-contain">
        <div className="container" >
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  } 
}

export default App;