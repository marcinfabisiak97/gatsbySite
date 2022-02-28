import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data, location }) => {
  const capitalizeEveryWord = str => str.replace(/-/g, ' ').replace(/\b[a-z]/g, char => char.toUpperCase()).replace('/', '').replace('Kanalowe', 'Kanałowe')
  const slug = capitalizeEveryWord(location.pathname)
  console.log(slug)
  console.log(data.allContentfulRecipe.nodes.filter(recipe => capitalizeEveryWord(recipe.title)))
  return (
    <Layout>

      {data.allContentfulRecipe.nodes.filter(recipe => recipe.title.slice() === slug).map((recipe, index) => {
        const {
          title,
          workTime,
          content,
          prepTime,
          description: { description },
          image,
        } = recipe
        const pathToImage = getImage(image)
        const { instructions } = content
        return (
          <React.Fragment key={index}>
            <SEO title={title.toLowerCase()} description="this home" />
            <main className="page">
              <div className="recipe-page">
                {/* hero */}
                <section className="recipe-hero">
                  <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    className="about-img"
                  />
                  <article className="recipe-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {/* icons */}
                    <div className="recipe-icons">
                      <article>
                        <BsClock />
                        <h5>prep time</h5>
                        <p>{prepTime} min.</p>
                      </article>
                      <article>
                        <BsClockHistory />
                        <h5>work time</h5>
                        <p>{workTime} min.</p>
                      </article>
                    </div>
                  </article>
                </section>
                {/* rest of the content */}
                <section className="recipe-content">
                  <article>
                    <h4>instructions</h4>
                    {instructions.map((item, index) => {
                      return (
                        <div key={index} className="single-instruction">
                          <header>
                            <p>step {index + 1}</p>
                            <div></div>
                          </header>
                          <p>{item}</p>
                        </div>
                      )
                    })}
                  </article>
                  <article className="second-column">
                  </article>
                </section>
              </div>
            </main>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
query getSingleRecipe($title: String){
  allContentfulRecipe(filter: {title: {eq: $title}}) {
    nodes {
      title
      workTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
    allSitePage {
      nodes {
        path
      }
    }
}
  
`

export default RecipeTemplate
