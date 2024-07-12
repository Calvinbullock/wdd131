
import projects from './projects.mjs';

// get parm from url
const urlParams = new URLSearchParams(window.location.search);
const projectID = urlParams.get('id');
console.log(projectID);

/* ======================================================= *\
-------------------------------------------------------------
||      Build 3rd page based on item id
-------------------------------------------------------------
\* ======================================================= */



