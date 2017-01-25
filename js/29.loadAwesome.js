function addCSS( url) {
  var link = document.createElement( 'link' );
  //if( callback ) script.onload = callback;
  link.type = "text/css";
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild( link );  
}

function loadAwesome() {
  addCSS( 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
}

window.onload = loadAwesome;