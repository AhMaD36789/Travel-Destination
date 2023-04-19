

function Tours(props) {

    return (<div className="DataBase">
    
 {   props.data.map(item => {
        return ( <div key={item.id}>
            <img src={item.image } alt={item.info}></img>
            <h3>{item.name}</h3>
            </div>
        );
    })
}

    </div>
    )
}
export default Tours;