import { Link } from "react-router-dom";
import './Tours.css';


function Tours(props) {

    return (
    
      props.data.map(item => {
        return ( <div key={item.id} className="Card">
            <Link to={`city/${item.id}`}><img src={item.image } alt={item.info}></img>
            <h3>{item.name}</h3>
            </Link>
            </div>
        );
    })


    
    )
}
export default Tours;