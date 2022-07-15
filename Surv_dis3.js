import React,{useState,useCallback} from 'react';
import MySurvey3 from './Surv_type3';
import axios from "axios";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Surveythree =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         await axios.post('http://127.0.0.1:5000/Discharge',{data : data}).then(res=>{localStorage.setItem("results", JSON.stringify(res.data)) });
        //this.setState({iscompleted:true});
        //localStorage.setItem("results", JSON.stringify(res.data))
        setshowPage(!showPage)
    },[showPage])
    const setFinalPage = ()=>{
        var zz=localStorage.getItem("results")
        return(
        <main>
          <Container>
            <Row>
            
            <h1>Thanks For Filling Survey</h1>
            <br/></Row>
            <Row className='d-flex justify-content-between'>
            <Link to="/Home">  <Button>Exit</Button></Link>
            
            </Row>
            </Container>
        </main>
        )
    }


    return(
        <div>{
          showPage?
          < MySurvey3 showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Surveythree;