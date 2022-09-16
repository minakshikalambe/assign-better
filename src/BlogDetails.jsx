import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
    const{id}=useParams();
    const navigate=useNavigate()
    const{data:blog,isPending,error}=useFetch(`http://localhost:8080/blogs/`+id)
    const handleClick=()=>{
        fetch( "http://localhost:8080/blogs/"+blog.id,{
            method:"DELETE"
        }).then(()=>{
         navigate("/")
        })
    }
    return (  
       <div>
        {
            isPending && <div> loading...</div>
        }
         {
            error && <div> {error}</div>
        }
        {
            blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )
        }
       </div>
    );
}
 
export default BlogDetails;