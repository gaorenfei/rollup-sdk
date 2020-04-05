import { version } from '../package.json';
import './index.css';
// Enable LiveReload
if(process.env.NODE_ENV === "development"){
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}


function aa() {
  console.log('version124 ' + version);
}

aa()