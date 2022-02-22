import React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
import ComponentName from '../components/test1'
import Test from '../components/test'
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";
export default function Home() {
  return (
    <Layout>
      <SEO title='home' description="this home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            height={400}
            placeholder='blurred'
            src='../assets/images/main.jpg' alt='sign'
            layout='fullWidth'
            className='hero-img'
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Dentist</h1>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main >
    </Layout>)
}
