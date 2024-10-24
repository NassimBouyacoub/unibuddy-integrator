import React from 'react';
import { useParams } from 'react-router-dom';

function All() {

    const slug=useParams()
    var langue=""
    if(slug.lang==="fr"){
        langue="fr-FR"
      }
      else if(slug.lang==="en")
        {langue="en-US"}
  return (
        <div >
            <iframe style={{ height: '98vh',border:"0px" }} data-ub-cookie-consent="necessary" data-ub-lang={langue} id="unibuddy-iframe" scrolling="yes" src="https://unibuddy.co/embed/essec-business-school/colour/1da1e0" title="Unibuddy" width="100%">
            </iframe>
            <script src="https://cdn.unibuddy.co/unibuddy-iframe.js" type="text/javascript">
            </script>

        </div>
  );
}

export default All;
