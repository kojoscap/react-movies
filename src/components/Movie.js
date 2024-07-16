import { Card, Col, Flex, Tag } from 'antd';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
const {Meta} = Card;

const Movie = (props) => {
    return (
        <Col className='gutter-row' key={props.id}>
            <Link to={`/movie/${props.id}`} style={{textDecoration: "none"}}>
                <Card
                    hoverable
                    style={{ width: 300,}}
                    cover={<img src={props.mediumCover} alt={props.title}/>}
                >
                    <Meta title={props.title} description={props.summary.length>200?props.summary.slice(0,150)+"...":props.summary}></Meta>
                    {props.genres.map((jang)=><Tag color="red" key={jang}>{jang}</Tag>)}
                </Card>
            </Link>
        </Col>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    mediumCover: propTypes.string,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;