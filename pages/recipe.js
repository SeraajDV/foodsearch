import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title> {router.query.term} - Food Search </title>
      </Head>

      {/* Search Results */}
      <SearchResults results={results} />

    </div>
  )
}

export default Search

export async function getServerSideProps(context) {

  const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${context.query.term}&app_id=acaf0bc4&app_key=d1b103ebeeb37a894d78f1898b04f556`)
  const data = await res.json()

  return {
    props: {
      results: data ? data : null
    }
  }
}