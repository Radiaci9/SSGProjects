import Link from 'next/link';
import styles from '../../styles/Rad.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      rads: data,
    }
  }
}

const Rad = ({rads}) => {
  return (
    <div>
      <h1>All Rads</h1>
      {rads.map(rad => (
        <Link key={rad.id} className={styles.single} href={`/rad/${rad.id}`}>
          <h3>{ rad.name }</h3>
        </Link>
      ))}
    </div>
  );
}
 
export default Rad;