import  Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.navBg}>
                <h2>
                    <Link href='/' className={styles.icon}>Post Blogs</Link>
                </h2>
            </div>
        </>
    )
}

export default Navbar
