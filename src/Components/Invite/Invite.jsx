import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Invite(changeDisplay) {

  const [candidateID, setCandidateID] = useState();
  const [userEmailID, setUserEmailID] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailID, setEmailID] = useState();
  const [yourName, setYourName] = useState();

  function clear() {
    setCandidateID("");
    setUserEmailID("");
    setFirstName("");
    setLastName("");
    setEmailID("");
    setYourName();
  }

  function cancel() {
    changeDisplay("myReferrals");
  }

  async function sendInvite() {
    await  fetch("https://www.contingentpro.com/invite", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidateId: candidateID,
        email: userEmailID,
        inviteeFirstName: firstName,
        inviteeLastName: lastName,
        inviteeEmailId: emailID,
        yourName: yourName,
      })
    })
    .then((response) => response.json())
      .then((x) => {
        if(x.status)
        {alert(x.message)}
        else{
          alert(x.message)
        }
        clear()
      })
      .catch((error) => console.error(error));
  }

  function changeInput(event, type) {
    /*if (type === "candidateID") {
      setCandidateID(event.target.value);
    }
    else if (type === "userEmailID") {
      setUserEmailID(event.target.value);
    }*/
   if (type === "firstName") {
      setFirstName(event.target.value);
    }
    else if (type === "lastName") {
      setLastName(event.target.value);
    }
    else if (type === "emailID") {
      setEmailID(event.target.value);
    }
    else if (type === "yourName") {
      setEmailID(event.target.value);
    }
  }
  

  return (
    <div id = "inviteInfo">
      <div>
        <h3> Candidate Referral Form</h3>
        <h4> I am Referring</h4>
        {/*< Row>
          <Col md={6}>My Candidate ID:</Col>
          <Col md={6}><input type="text" value={candidateID} onChange={(e)=>changeInput(e, 'candidateID')}/></Col>
        </Row>
        < Row>
          <Col md={6}>My Email ID:</Col>
          <Col md={6}><input type="text" value={userEmailID} onChange={(e)=>changeInput(e, 'userEmailID')}/></Col>
  </Row> */}
        < Row>
          <Col md={4}>First Name</Col>
          <Col md={8}><input type="text" id = "fntextbox" value={firstName} onChange={(e)=>changeInput(e, 'firstName')}/></Col>
        </Row>
        < Row>
          <Col md={4}>Last Name</Col>
          <Col md={8}><input type="text" id = "lntextbox" value={lastName} onChange={(e)=>changeInput(e, 'lastName')}/></Col>
        </Row>
        < Row>
          <Col md={4}>Email ID</Col>
          <Col md={8}><input type="text" id ="emailidtextbox" value={emailID}  onChange={(e)=>changeInput(e, 'emailID')}/></Col>
        </Row>
        < Row>
          <Col md={4}>Your Name</Col>
          <Col md={8}><input type="text" id ="yournametextbox" value={yourName}  onChange={(e)=>changeInput(e, 'yourName')}/></Col>
        </Row>
      </div>
      <Row className="buttons">
        <Col md={{span:1, offset: 3}}><Button type="button" onClick={() => clear()}>Clear</Button></Col>
        <Col md={1}><Button type="button" onClick={() => cancel()}>Cancel </Button></Col>
        <Col md={2}><Button type="button" onClick={() => sendInvite()}> Send Invite </Button></Col>
      </Row>
    </div>
  );
}