export function BlogList({ blogs, title }) {


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <div className='sub-title'>
                        <p>Written By {blog.author}</p>
                        <p>{blog.date}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}