import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
query {
    site {
      info: siteMetadata {
        description
        simpleData
        title
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

const Test = () => {
    {/*const data = useStaticQuery(getData)*/ }
    const {
        site: {
            info: { title }
        }
    } = useStaticQuery(getData)
    return (
        <div>
            { /*<h2>{data.site.siteMetadata.person.name}</h2>*/}
            <h2>{title}</h2>
        </div>
    );
};

export default Test;