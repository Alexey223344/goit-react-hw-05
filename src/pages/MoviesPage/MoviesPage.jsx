import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getSerchMovie } from "../../services/api";
import { Field, Formik, Form } from "formik";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchMovie, setSerchMovie] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const initialValues = { query: "" };
  const handleSubmit = (values) => {
    if (!values.query) {
      return setSearchParams({});
    }
    searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      const data = await getSerchMovie(query.toLocaleLowerCase());
      setSerchMovie(data);
    };
    getData();
  }, [query]);
  return (
    <div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field name={query} placeholder="Enter movie" />
            <button type="submit">Search Movie</button>
          </Form>
        </Formik>
      </div>
      {searchMovie && <MovieList movieData={searchMovie} />}
    </div>
  );
};
export default MoviesPage;
