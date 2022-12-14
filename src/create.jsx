import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const navigate=useNavigate()
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author, setAuther]=useState('');
    const[isPending,setIsPending]=useState(false)
   
    const handleSubmit=(e)=>{
         e.preventDefault();
         setIsPending(top)
         const blog={title,body,author}
         fetch("http://localhost:8080/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
         })
         .then(()=>{
            console.log("new Added")
            setIsPending(false)
          navigate("/")
         })
        
    }
    return ( 
        <div className="create">
             <h2>Add new blog</h2>
             <form onSubmit={handleSubmit}>
                <input type="text" required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={((e)=>setAuther(e.target.value))}>
                    <option value="mario">mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled> Adding Blog...</button>}
             </form>
        </div>
     );
}
 
export default Create;