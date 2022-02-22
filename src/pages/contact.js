import React from 'react';
import Layout from '../components/layout'
import RecipesList from '../components/RecipesList';
import { useStaticQuery, graphql } from 'gatsby';
const Contact = ({ data }) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Need to get in touch?</h3>
                        <p>Nulla reprehenderit Lorem nisi est non Lorem id nostrud aliqua consectetur. In reprehenderit duis elit amet irure ipsum.
                        </p>
                        <p>
                            Consequat pariatur nulla qui ea exercitation excepteur tempor nisi incididunt id aliquip labore.
                        </p>
                        <p>
                            Ad nulla deserunt nulla aute irure sint eu do sint labore proident sit esse dolore. Dolore amet do pariatur nostrud laboris
                            occaecat minim ullamco veniam.
                        </p>
                    </article>
                    <article>
                        <form className='form contact-form'>
                            <div className='form-row'>
                                <label htmlFor='name'>Your name</label>
                                <input type='text'></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor='email'>Your email</label>
                                <input type='text' name='email' id='email'></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor='message'>message</label>
                                <textarea name='message' id='message'></textarea>
                            </div>
                            <button type='submit' className='btn block'>submit</button>
                        </form>

                    </article>
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
export default Contact;