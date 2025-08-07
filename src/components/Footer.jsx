import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-8 text-center text-sm text-gray-600">
      <p>&copy; 2021</p>
      <Link to="/about" className="text-blue-500 hover:underline">
        About
      </Link>
    </footer>
  )
}

export default Footer
