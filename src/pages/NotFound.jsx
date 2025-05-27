import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 page not NotFound</h1>
      <p>The page does not exitst</p>
      <Link to="/">Go to the home page</Link>
    </div>
  )
}

export default NotFound