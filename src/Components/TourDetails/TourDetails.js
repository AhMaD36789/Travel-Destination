import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { Card, Button } from "react-bootstrap";
import "./TourDetails.css";
import { useState } from 'react';
import Footer from '../footer/Footer'

const charNum = 111;

function TourDeatails(props) {
    const { id } = useParams();
    let [showMore, lineAdd] = useState('');
    const showMoreString = () => {
        document.getElementById("lessBtn").style.display = "none";
        props.data.filter(item => item.id === id).map(item => (
            lineAdd(item.info.substring(charNum, item.info.length))
        ))
        document.getElementById("lessBtn").style.display = "inline-block";
        document.getElementById("moreBtn").style.display = "none";

    }

    const showLessString = () => {
        document.getElementById("moreBtn").style.display = "none";
        props.data.filter(item => item.id === id).map(item => (
            lineAdd('')
        ))
        document.getElementById("lessBtn").style.display = "none";
        document.getElementById("moreBtn").style.display = "inline-block";
    }
    return (
        <>
            <Header />
            <Card>
                <Card.Body>

                    {props.data.filter(item => item.id === id).map(item => (
                        <div className="more" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>
                                {item.info.substring(0, charNum) +''+ showMore}
                            </p>
                            <Button onClick={showMoreString} id="moreBtn">show more </Button>
                            <Button onClick={showLessString} id="lessBtn">show less </Button>
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <Footer />


        </>
    )
}

export default TourDeatails;