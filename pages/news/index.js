import { Fragment } from "react/cjs/react.production.min"
import Link from "next/link"

function NewsPage() {
    return (
      <Fragment>
      <h1>The News Page</h1>
      <ul>
          <li><Link href='/news/next-js-is-great'>NextJS is Great</Link></li>
          <li><Link href='/news/another-entry'>Another new entry</Link></li>
      </ul>
      </Fragment>
    )
  }
  
  export default NewsPage