
import Bloglist from "./bloglist";
import useFetch from "./useFetch";
const Home = () => {
const{data:blogs,isPending,error}=useFetch("http://localhost:8080/blogs")

    return ( 
        <div className="home">
            {error &&<div>{error}</div>}
       {isPending &&<div>Loding...</div>}     
       {blogs && <Bloglist blogs={blogs} />}
        </div>
     );
}
 
export default Home;