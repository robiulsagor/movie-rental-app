import { data } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {data.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
