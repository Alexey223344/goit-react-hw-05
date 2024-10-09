import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../services/api";
import { Field, Formik, Form } from "formik";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const initialValues = { query: "" };

  const handleSubmit = (values) => {
    if (!values.query) {
      return setSearchParams({});
    }

    setSearchParams({query: values.query});
  };
  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      const data = await getSearchMovie(query.toLocaleLowerCase());
      setSearchMovie(data);
    };
    getData();
  }, [query]);
  return (
    <div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field name='query' placeholder="Enter movie" />
            <button type="submit">Search Movie</button>
          </Form>
        </Formik>
      </div>
      {searchMovie.length>0 && <MovieList movieData={searchMovie} />}
    </div>
  );
};
export default MoviesPage;
