import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// variables
import secret from '../config';

import shuffleArray from '../functions'

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

    componentDidMount() {
        this.getTopStories();
    }

    getTopStories () {
        fetch(`${URL}?sources=${news_Source}&apiKey=${secret.API_KEY}`, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topStories: data
                })
            })
    }

    renderTopStories = ({topStories}) => {
        let headlines = topStories.articles;
        if (headlines) {
            return shuffleArray(headlines).map((headline, index) => {
                // console.log(headline)
                return (
                    <Carousel.Item className="slider-wrapper" key={headline.index}>
                        <img className="slider-img"  alt="900x500" src={headline.urlToImage} />
                        <Carousel.Caption>
                            <h4>{headline.title}</h4>
                            <p>
                                {/* {headline.description} */}
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
}

export default TopStories;