import React, { Component } from 'react'

class SearchCourse extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: '10px' }}>
        <form>
          <div className="form-row">
            <div className="col-8">
              <input type="text" className="form-control" placeholder="search course" />
            </div>
            <div className="col-4">
              <button className="btn btn-secondary" >Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchCourse
