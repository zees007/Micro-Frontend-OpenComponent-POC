import styles from './css/styles.css';

let image = window.oc.product.image;

window.oc.events.on('imageChange', () => {
    image = window.oc.product.image;
    document.getElementById('image-change').src = image;
});

export default ({ staticPath }) =>
    `<div class=${styles.show}>
    <img src=${image} style="max-height: 300px;" id="image-change" />
  </div>`;
