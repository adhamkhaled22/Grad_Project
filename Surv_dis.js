import React,{useState,useCallback} from 'react';
import MySurvey from './survey_type';
import axios from "axios";
import "./App.css";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Survone =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         await axios.post('http://127.0.0.1:5000',{data : data}).then(res=>{localStorage.setItem("results", JSON.stringify(res.data)) });
        setshowPage(!showPage)
    },[showPage])
    const setFinalPage = ()=>{
        var zz=localStorage.getItem("results")
        var zz2=parseInt(localStorage.getItem("numbp2"))+1
        localStorage.setItem("numbp2", zz2) 
        console.log(zz.charAt(2))
        console.log(zz)
        if(zz.charAt(2)=='A')
        {
            var zz3=parseInt(localStorage.getItem("numbp"))+1
            localStorage.setItem("numbp", zz3)
        }
        
        return(
        <main>
            <Container>
            <Row>
            

            <h1>{zz}</h1>
            <h1>In Case of Patient Admit Please refer to ESI </h1>
            <br/></Row>
            <Row className='d-flex justify-content-between'>
            <Link to="/SurveyAppESI"><Button>ESI</Button></Link>
            <Link to="/Home">  <Button>Exit</Button></Link>
            
            </Row>
            </Container>
            </main>
            
        )
    }


    return(
        <div>{
          showPage?
          < MySurvey showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Survone;