export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(rad => ({
    params: {
      id: rad.id.toString(),
    }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      rad: data,
    },
  }
};

const Details = ({rad}) => {
  return (
    <div>
      <h1>{rad.name}</h1>
      <p>{rad.email}</p>
      <p>{rad.website}</p>
      <p>{rad.address.city}</p>
    </div>
  );
}
 
export default Details;