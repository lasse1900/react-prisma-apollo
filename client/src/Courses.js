import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const renderCourses = ({ data, error, loading }) => {
  if (loading) return <p>...Loading</p>
  if (error) return <p>Error</p>
  return data.courseFeed.map(({ id, description, name, isPublished }) => {
    return (
      <div key={id}>
        <p>Name: {name}, Description: {description}</p>
      </div>
    )
  })
}
const Courses = () => {
  return (
    <div>
      <Query
        query={
          gql`
          {
            courseFeed {
              id
              name
              description
              isPublished
            }
          }
          `
        }
      >
        {/*{renderCourses} */}
        {({ data, error, loading }) => {
          if (loading) return <p>...Loading</p>;
          if (error) return <p>Error</p>;
          return data.courseFeed.map(
            ({ id, description, name, isPublished }) => {
              return (
                <div key={id}>
                  <p>Name: {name}, Description: {description} </p>
                </div>
              );
            }
          );
        }}
      </Query>
    </div>
  )
}

export default Courses
