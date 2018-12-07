import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="segment">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Image Search</span>
            </div>
            <input type="text" 
              className="form-control" 
              value={this.state.term} 
              onChange={(e) => 
                this.setState({ term: e.target.value })
              } 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;