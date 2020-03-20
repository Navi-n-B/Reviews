'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;

const app = () => {
  return <div>Hello World.</div>
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);