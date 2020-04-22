import React from 'react'
import Url from 'url'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'

import Post from './post'

import styles from './blog-post.module.css'

function BlogPost({ title, url, date }) {
  const { host } = Url.parse(url)

  return (
    <Post title={title} url={url} className={styles.post}>
      <Post.Meta>
        <span>
          {dayjs(date)
            .locale('tr')
            .format('D MMMM')}
        </span>
        {' • '}
        <span>{host}</span>
      </Post.Meta>
    </Post>
  )
}

export const query = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    frontmatter {
      title
      desc
      url
      date
    }
  }
`

export default BlogPost
