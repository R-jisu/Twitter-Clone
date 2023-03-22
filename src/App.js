import React from "react";
import useAxios from "./useAxios";
/**
 * useAxios
 * // npm install axios
 */
function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div>
      <h2>{data && data.status}</h2>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refectch</button>
    </div>
  );
}

export default App;
