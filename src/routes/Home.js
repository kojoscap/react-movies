import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Row } from "antd";

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovies = async() => {
        const res = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')).json();
        console.log(res);
        setMovieList(res.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    },[]);

    return (
        <div>
            <h1>KOJOS Movies</h1>

            {loading ? <h3>Loading...</h3> :
                <Row gutter={[16,24]}>
                    {movieList.map((movie)=>{               
                        return   ( 
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                mediumCover={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        );                
                     })}
                </Row>
            }
        </div>
    );    
    
}

export default Home;