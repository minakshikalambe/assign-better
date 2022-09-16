import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
         <h2>Soory</h2>
         <P>that page not found</P>
         <Link to="/">Bck to home page</Link>
        </div>
     );
}
 
export default NotFound;