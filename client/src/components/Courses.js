import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom';

// const renderCourses = ({ data, error, loading }) => {
//   if (loading) return <p>...Loading</p>
//   if (error) return <p>Error</p>
//   return data.courseFeed.map(({ id, description, name, isPublished }) => {
//     return (
//       <div key={id}>
//         <p>Name: {name}, Description: {description}</p>
//       </div>
//     )
//   })
// }
const Courses = () => {
  return (
    <div>
      <Query
        query={COURSE_FEED_QUERY}
      >
        {/*{renderCourses} */}
        {({ data, error, loading }) => {
          if (loading) return <p>...Loading</p>;
          if (error) return <p>Error</p>;
          return data.courseFeed.map(
            ({ id, description, name, isPublished }) => {
              return (
                <div key={id} className="card container">
                  <div className="card-body">
                    <div className="card-title"><p>{name}</p></div>
                    <div className="card-text">{description}</div>
                    <Link to={`course/${id}/edit`} className="btn btn-secondary">
                      Edit
                  </Link>
                    <Mutation mutation={DELETE_COURSE_MUTATION}
                      variables={{ id }}
                      update={(cache, { data: { deleteCourse } }) => {
                        const { courseFeed } = cache.readQuery({
                          query: COURSE_FEED_QUERY
                        })
                        cache.writeQuery({
                          query: COURSE_FEED_QUERY,
                          data: {
                            courseFeed: courseFeed.filter(course => course.id !== deleteCourse.id)
                          }
                        })
                      }}
                    >
                      {(deleteCourse, { data, error, loading }) => {
                        return (
                          <button style={{ marginLeft: '10px' }}
                            className="btn btn-danger"
                            onClick={async () => {
                              await deleteCourse()
                            }}
                          >Delete
                          </button>
                        )
                      }}
                    </Mutation>
                  </div>
                </div>
              );
            }
          );
        }}
      </Query>
    </div>
  )
}
export const DELETE_COURSE_MUTATION = gql`
mutation DeleteCourse($id: ID!) {
  deleteCourse(id: $id) {
    id
    name
  }
}
`;
export const COURSE_FEED_QUERY = gql`
  {
    courseFeed {
      id
      name
      description
      isPublished
    }
  }
`;
export default Courses