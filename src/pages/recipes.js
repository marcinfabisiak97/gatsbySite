import React from 'react';
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes';
const Recipes = () => {
    return (

        <Layout>
            <main className='page'>
                <section className='recipes-page'>
                    <AllRecipes />
                </section>

            </main>
        </Layout>
    );
};

export default Recipes;