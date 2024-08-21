import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>Booger Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: 'rgb(73, 146, 73)',
                    borderRadius: '8px'
                }
                }>New Post</Link>
            </div>
        </nav >
    )
}
