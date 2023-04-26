
import './Tours.css';
import Tour from './tour/Tour';

function Tours(props) {

    return (
        <>
        <div className='mainCard'>
        <Tour data={props.data} />
        </div>
        </>
    )
}
export default Tours;