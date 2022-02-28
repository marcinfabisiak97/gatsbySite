import React from 'react';
import Layout from '../components/layout'
import RecipesList from '../components/RecipesList';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from "../components/SEO"
const Contact = ({ data }) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <SEO title='kontakt' description="contact" />
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Potrzebujesz kontaktu?</h3>
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
                                <label htmlFor='name'>Twoje imię</label>
                                <input required type='text'></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor='email'>Twój email</label>
                                <input type='text' name='email' id='email' required></input>
                            </div>
                            <div className='form-row'>
                                <label htmlFor='message'>wiadomość</label>
                                <textarea name='message' id='message' required></textarea>
                            </div>
                            <button type='submit' className='btn block'>wyślij</button>
                        </form>

                    </article>
                </section>
                <section className="featured-recipes">
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
      workTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`
export default Contact;