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
    <iframe style={{ height: '98vh' }} data-ub-cookie-consent="necessary" data-ub-lang={langue} id="unibuddy-iframe" scrolling="no" src={slugUni} title="Unibuddy" width="100%">
    </iframe>
    <script src="https://cdn.unibuddy.co/unibuddy-iframe.js" type="text/javascript">
    </script>
    </div>
  );
}

export default Iframe;
