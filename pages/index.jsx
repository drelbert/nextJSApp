/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
)

export async function getStaticProps() {
  // mocking a get data from cms

  return {
    props: {
      content: {
        title: 'Updated: using static props',
      },
    },
  }
}
