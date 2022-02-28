const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          title
        }
      }
    }
  `)
  console.log(result)
  result.data.allContentfulRecipe.nodes.forEach(node => {
    const tagSlug = slugify(node.title, { lower: true })
    createPage({
      path: `/${tagSlug}`,
      component: path.resolve(`src/template/tag-template.js`),
      context: {
        node: node.title,
      },
    })

  })
}

