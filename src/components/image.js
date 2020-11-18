import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(png)|(jpg)|(jpeg)/" }
          name: { nin: ["gatsby-astronaut", "gatsby-icon"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ImageContainer>
      <h1>View our destination</h1>
      <ImageGrid>
        {data.allFile.edges.map((image, index) => {
          return (
            <ImageItem
              key={index}
              className="image-item"
              fluid={image.node.childImageSharp.fluid}
            />
          )
        })}
      </ImageGrid>
    </ImageContainer>
  )
}

export default Image

const ImageContainer = styled.div`
  text-align: center;
  margin: 80px 0;

  h1 {
    margin-bottom: 64px;
  }
`
const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 32px;
`

const ImageItem = styled(Img)`
  &:nth-child(5) {
    grid-column-end: span 2;
  }
  &:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  img:hover {
    transform: scale(1.1);
    transition: 0.7s all ease !important;
  }
`
