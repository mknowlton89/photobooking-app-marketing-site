import styles from '../styles/TopNav.module.css'

const TopNav = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <h1>Bookr</h1>
            </div>
            <div className={styles.linkContainer}>
                <p>Home</p>
                <p>About</p>
                <p className={styles.loginLink}>Login</p>
                <button>Try it Free</button>
            </div>
        </nav>
    )
}

export default TopNav
