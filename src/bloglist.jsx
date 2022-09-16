import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {
    return ( 
        <div>
              { blogs.map((blog)=>(
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                  <div className="blog-pre" >
                  <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                  </div>
                  </Link>
            ))
        }
        </div>
     );
}
 
export default Bloglist;