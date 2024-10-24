import React from 'react';
import { useParams } from 'react-router-dom';

function Iframe() {
  const slug=useParams()
  console.log(slug)
  var langue=""
  if(slug.lang==="fr"){
    langue="fr-FR"
  }
  else if(slug.lang==="en")
    {langue="en-US"}
  console.log(langue)
  var slugUni="https://unibuddy.co/embed/essec-business-school/course/"+slug.id
  
  
  
  return (
    <div >
      <iframe style={{ height: '98vh',border:"0px" }} data-ub-cookie-consent="necessary" data-ub-lang={langue} id="unibuddy-iframe" scrolling="yes" src={slugUni} title="Unibuddy" width="100%">
      </iframe>
    </div>
  );
}

export default Iframe;
