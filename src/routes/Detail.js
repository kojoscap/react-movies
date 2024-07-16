import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
   const { id } = useParams();
   const [ddata, setDdata] = useState();
   const [isload, setIsload] = useState(true);
   
   const getMovie = async () => {
        const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const result = await res.json();
        
        setDdata(result.data.movie);
        setIsload(false);
        console.log(result);
   };


   useEffect(()=>{
        getMovie();        
   }, [id]);

   return (
    <div>
        {isload ? <h3>Loading...</h3> : 
                <MovieDetail 
                    key={ddata.id}
                    id={ddata.id}
                    titleLong={ddata.title_long}
                    largeCoverImage={ddata.large_cover_image}
                    runtime={ddata.runtime}
                    rating={ddata.rating}
                    genres={ddata.genres}
                    description={ddata.description_intro}
                />
         }
        
    </div>
        
    
   );
}

export default Detail;