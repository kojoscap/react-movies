import { Card, Divider, Rate, Tag } from 'antd';
import propTypes from 'prop-types';

function MovieDetail (props)  {
    return (
        <Card>
            <div key={props.id}>
                <h1>{props.titleLong}</h1>
                <div style={{display: "flex"}}>
                    <img src={props.largeCoverImage} alt={props.titleLong}/>
                    <div style={{margin: "100px"}}>
                        <p style={{fontSize: "2em"}}>{props.description}</p>
                        <Divider orientation='left'>상영시간 : {props.runtime} 분</Divider>       
                        <Divider orientation='left'>별점 : <Rate disabled color defaultValue={parseFloat(props.rating)} />{parseFloat(props.rating)}</Divider>        
                        <Divider orientation='left'>장르 : {props.genres.map((s)=><Tag color="red" key={s}>{s}</Tag>)}</Divider>
                    </div>
                </div>
            </div>
        </Card>
    );
}

MovieDetail.propTypes = {
    id: propTypes.number.isRequired,
    largeCoverImage: propTypes.string,
    titleLong: propTypes.string.isRequired,
    runtime: propTypes.string.isRequired,
    rating: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default MovieDetail;