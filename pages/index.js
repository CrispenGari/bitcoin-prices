import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header, Main} from '../Components'
import axios from 'axios'
const Home=(props)=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin</title>
        <link rel="icon" href="https://www.pngarts.com/files/3/Bitcoin-PNG-Image-with-Transparent-Background.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
      </Head>
     <Header/>
     <div className="container">
       <Main data={props?.data}/>
     </div>
    </div>
  )
}
Home.getInitialProps = async ()=>{
  const _ = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  return {
    data: _.data
  };
}
console.clear()
export default Home