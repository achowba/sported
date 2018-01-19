import React, { Component } from 'react';
import { Carousel, Item, Caption } from 'react-bootstrap';

// variables
import secret from '../config';

const URL = `https://newsapi.org/v2/top-headlines`;
const news_Source = 'talksport';

class TopStories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: {},
            error: ''
        }
    }

    getTopStories () {
        fetch(`${URL}?sources=${news_Source}&apiKey=${secret.API_KEY}`, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                // console.log(json)
                // let json = Object.keys(data.articles)
                this.setState({
                    topStories: data
                })
            })
    }

    renderTopStories = ({topStories}) => {
        let headlines = topStories.articles;
        if (headlines) {
            return headlines.map((headline) => {
                console.log(headline)
                return (
                    <Carousel.Item className="slider-wrapper">
                        <img className="slider-img" height={500} alt="900x500" src={headline.urlToImage} />
                        <Carousel.Caption>
                            <h3>{headline.title}</h3>
                            <p>
                                {headline.description}
                                <a href={headline.url} target="_blank">Read More</a>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
    }

    render() {
        return (
            <Carousel controls={true}>
                {this.renderTopStories(this.state)}
            </Carousel>
        );
    }

    componentDidMount() {
        this.getTopStories();
    }
}

export default TopStories;