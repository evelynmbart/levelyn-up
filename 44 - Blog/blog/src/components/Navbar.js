export function Navbar() {
    return (
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: 'rgb(73, 146, 73)',
                    borderRadius: '8px'
                }
                }>New Post</a>
            </div>
        </nav >
    )
}
