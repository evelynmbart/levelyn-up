import { useParams } from 'react-router-dom'

export function BlogDetails() {
    const params = useParams();
    return (
        <div className="blog-details">
            <h2>Blog details - { }</h2>
        </div>
    )
}