import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Page not found</h2>
      <p>Sorry, this page doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFoundPage;