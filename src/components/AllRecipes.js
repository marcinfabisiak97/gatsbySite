import React from 'react';
import RecipesList from './RecipesList';
import { useStaticQuery, graphql } from 'gatsby';
const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        workTime
        prepTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;