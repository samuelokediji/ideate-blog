import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = " Ideate Gatsby Starter Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </nav>
        <img style={{ margin: 0 }} src="https://res.cloudinary.com/unitech-global-resource/image/upload/v1595118073/ID8_lmo8lb.png" alt="" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
            
        <p>Welcome to Ideate Blog website.</p>
        <p>
         Learn about how design meets branding
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
