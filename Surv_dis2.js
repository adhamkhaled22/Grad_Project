import React,{useState,useCallback} from 'react';
import MySurvey2 from './Surv_type2';
import axios from "axios";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Surveytwo =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         await axios.post('http://127.0.0.1:5000/esi',{data : data}).then(res=>{localStorage.setItem("results", JSON.stringify(res.data)) });
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
            
            <h1>Patient Priority = {zz} </h1>
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
          < MySurvey2 showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Surveytwo;