import '../css/css.css';
import { addHtml } from './text';

addHtml()

if(module.hot) {
  module.hot.accept('./text.js', function(){
    console.log('Haciendo el hot reload')
    addHtml()
  })
}