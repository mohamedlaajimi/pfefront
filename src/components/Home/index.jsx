import styles from "./styles.module.css";

const Home = () => {
return (
    
    <div className={styles.main_container}>
        <nav className={styles.navbar}>
            <h1>ProtectMe</h1>
            <button className={styles.white_btn} href="/Signup">
                Signup
            </button>
            <button className={styles.white_btn}>
                Signin 
            </button>
            <button className={styles.white_btn}>
                About
            </button>
        </nav>
    </div>

);
}
export default Home;

