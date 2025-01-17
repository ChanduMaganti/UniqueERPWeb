import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage(changeDisplay) {

  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((data) => setData(data.json()))
  //     .catch((error) => console.error(error))
  // }, []);

  return (
    <div>
      <div id ="homeIds">
        <Row className={"home-row"}>
          <Col md={3}>
            <img ssrc={require('./Referral Program Picture.png')} alt="Refer your Friends"/></Col>
          <Col md={9}>
                      <h3><b>Refer Your Friends, Colleagues and Earn Continuously</b></h3>
                      You can invite your Friends and professional colleagues from Invite tab to register on this platform. Once they register they can access all opportunities on this platform and earn better billing rates. You keep earning every hour your referred candidate works through Unique ERP Inc. As long as your profile is active and referred candidates working through Unique ERP, you keep earning. We will make quarterly payments based on the credits accumulated and payments received for your referred candidates

          </Col>
        </Row>
        <Row className={"home-row"}>
          <Col md={9}>
                      <h3><b>Interview and Earn</b></h3>
                      The key to the success is to find the right candidate for the given opportunity. Interview is the key step to achieve the success. You have strong interviewing skills then Join our interview panel and earn when the candidate you interviewed gets selected to a project or the job opportunity. Your account will be credited with credits based on job country for every successful candidate onboarded to a project or a job. We will make 

          </Col>
          <Col md={3}>
            <img src={require('./Interview Picture.jpg')} alt="Interview Earn"/>

          </Col>
        </Row>
        <Row className={"home-row"}>
          <Col md={3}>
            <img src={require('./Business Lead.jpg')} alt="My Business Image"/> </Col>
          <Col md={9}>
          <h3><b>Generate Business Leads and Earn</b></h3>
You know a project or resourcing opportunities within your network, You can bringing those opportunities to this platform and earn income. You will earn continuous income for first year on the revenue generated by you using your connections. Why wait, Contact us to discuss further on the leads you have and how you can benefit from these leads. Only the first one who bring opportunity get’s the credits. We cannot have more than one candidate referring the same opportunity. Drop us a note at <a>candidate_leads@contingentpros.com </a>with the details of the lead you have and we will connect with you.
          </Col>
        </Row>
      </div>
      <div id ="faq" >
        <h3 >For any additional questions, Please visit <a>https://contingentpros.com/faqs/</a></h3>
      </div>
    </div>
  );
}