import styles from './css/styles.css';

let name = window.oc.product.name;

window.oc.events.on('imageChange', () => {
    name = window.oc.product.name;
    document.getElementById('image-name').innerText = name;
});

export default ({ staticPath }) =>
    `<div class=${styles.product}>
   <span id="image-name">${name}</span>
  </div>`;
