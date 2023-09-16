import Layout from "../../components/layout";
import styles from './CartPage.module.scss'
const Cart = () => {
  return <Layout>
    <section>
      <div className="container">
        <div className={styles.cart}>
          <div className={styles.cart__products}>
            
          </div>
        </div>
      </div>
    </section>
  </Layout>;
};

export default Cart;
