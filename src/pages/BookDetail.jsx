import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setBook(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBook()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!book) return <div>Book not find</div>

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
      <Link to="/books" className="back-button">
        Geri qayıt
      </Link>
    </div>
  )
}

export default BookDetail