import React from "react";
import styles from "./styles.css";

const App = props =>

<div className={styles.container}>
    <b>
     Choose the Height of Conceit
</b>

<div className={styles.label1}>
<input type="radio" name="radio"
className={styles.btn}
onClick={() => {window.oc.product.setProduct('Not Really !!', 'https://hotforsecurity.bitdefender.com/wp-content/uploads/2013/11/pc-users-four-times-more-angry-with-slow-performance-than-catching-viruses-bitdefender-study-shows.jpg')}}
/>
    <label>Show me Most Angry Person</label>

</div>

<div className={styles.label1}>
<input type="radio" name="radio"
className={styles.btn}
onClick={() => {window.oc.product.setProduct('Aff..!! no way', '\n' +
    'https://myrepublica.nagariknetwork.com/uploads/media/2017/August/angry_customer_shutterstock.jpg')}}
/>
    <label>I said MOST</label>

</div>


<div className={styles.label1}>
    <input type="radio" name="radio"
        className={styles.btn}
        onClick={() => {window.oc.product.setProduct('Awesome... You deserve an Oscar for it :)', 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1570200421/191003-Fallon-Obsessed-tease_rqtgro' +
            '\n')}}
    />
       <label>Perfection</label>

</div>
</div>;

export default App;
