import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
    return (
        <>
        <h1>{props.title}</h1>
        
        <ul>
            <MovieListItem url="https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_the%2520matrix">
                {props.movies[0]}
            </MovieListItem>
            <MovieListItem url="https://www.imdb.com/title/tt0770828/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_man%2520of%2520s">
                {props.movies[1]}
            </MovieListItem>
            <MovieListItem url="">
                {props.movies[2]}
            </MovieListItem>
            <MovieListItem url="">
                {props.movies[3]}
            </MovieListItem>
            
        </ul>
        </>
    );
}
           