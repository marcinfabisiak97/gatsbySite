import React from 'react';
import { graphql } from 'gatsby';
const Test2 = ({ data }) => {
    const author = data.site.info.author
    return (
        <div>
            <h2>{author}</h2>
        </div>
    );
};
export const data = graphql`
{
  site {
    info: siteMetadata {
      author
      description
      title
      simpleData
      complexData {
        age
        name
      }
      person {
        age
        name
      }
    }
  }
}
`
export default Test2;