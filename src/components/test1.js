import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
    return (
        <div>
            <h2>{data.site.siteMetadata.person.name}</h2>
            <div>{data.site.siteMetadata.complexData.map((item, index) => {
                return (
                    <div>
                        <p key={index}>{item.name}</p>

                    </div>

                )
            })}</div>

        </div>)

}

export default ComponentName
