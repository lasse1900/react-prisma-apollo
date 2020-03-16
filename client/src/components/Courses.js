import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants'
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner/Spinner'

class Courses extends React.Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div>
        <Query
          query={COURSE_FEED_QUERY}
        >
          {/*{renderCourses} */}
          {({ data, error, loading }) => {
            if (loading) return <Spinner />;
            if (error) return <ErrorMessage error={error} />;
            return data.courseFeed.map(
              ({ id, description, name, isPublished }) => {
                return (
                  <div key={id} className="card container">
                    <div className="card-body">
                      <div className="card-title"><p>{name}</p></div>
                      <div className="card-text">{description}</div>
                      {
                        authToken ? (
                          <React.Fragment>
                            <Link to={`course/${id}/edit`}
                              className="btn btn-outline-secondary btn-sm">
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
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={async () => {
                                      await deleteCourse()
                                    }}
                                  >Delete
                                  </button>
                                )
                              }}
                            </Mutation>
                          </React.Fragment>
                        ) : null
                      }
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