import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import RecipesList from '../components/RecipesList';
import { graphql } from 'gatsby';
import SEO from "../components/SEO";
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {

  return (
    <Layout>
      <SEO title='about' />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>Esse ex occaecat id magna consequat et esse eiusmod.</h2>
            <p>Sunt minim enim consectetur voluptate irure consequat cupidatat sit deserunt nostrud excepteur eu labore. Quis laborum occaecat pariatur anim commodo cupidatat eiusmod. Veniam ut laborum eiusmod ullamco non fugiat officia velit culpa reprehenderit.</p>
            <p>Id incididunt minim consectetur laboris aute Lorem incididunt ad minim ad nostrud labore tempor voluptate.</p>
            <Link to='/contact' className='brn'>contact</Link>
          </article>
          <StaticImage

            src='../assets/images/about1.jpg'
            alt='chair'
            className="about-img"
            placeholder='blurred'
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>

    </Layout>
  );
};
export const query = graphql`
{
  allContentfulRecipe(
    sort: { fields: title, order: ASC }
    filter: { featured: { eq: true } }
  ) {
    nodes {
      id
      title
      cookTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`
export default About;
