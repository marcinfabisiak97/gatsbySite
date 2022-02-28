import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';
const RecipesList = ({ recipes = [] }) => {

    return (
        <div className='recipes-list'>
            {recipes.map(recipe => {
                const { id, title, image, prepTime, workTime } = recipe
                const pathToImage = getImage(image)
                const slug = slugify(title, { lower: true })
                return (
                    <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage
                            image={pathToImage}
                            className='recipe-img'
                            alt={title}
                        />
                        <h5>{title}</h5>

                    </Link>
                )
            })}
        </div>
    );
};

export default RecipesList;