

function SearchResults({ results }) {
  return (
    <div >
      {results.hits.map((item) => (
        <div key={item.recipe.uri}>
          <h1>{item.recipe.label}</h1>
          <h3>Source: {item.recipe.source}</h3>
          <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">
            <h6>Click here for recipe</h6>
          </a>
          <br />
        </div>
      ))}
    </div>
  );
}

export default SearchResults