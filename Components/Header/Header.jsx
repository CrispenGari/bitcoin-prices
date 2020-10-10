
import styles from './Header.module.css'
import Link from 'next/link'
const Header=()=>{
    
    return <div className={styles.header}>
        <div className ={styles.header__left}>
            <Link href="/">
            <img src="https://www.pngarts.com/files/3/Bitcoin-PNG-Image-with-Transparent-Background.png" alt=""/>
        </Link></div>
        <div className ={styles.header__right}>
            <h1><Link href ="/about"><a className={styles.a_tag}>About</a></Link></h1>
            <h1><Link href="/"><a className={styles.a_tag}>Home</a></Link></h1>
        </div>
    </div>
}
export default  Header