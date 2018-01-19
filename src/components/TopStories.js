import React, { Component } from 'react';

// variables
import secret from '../config';

/* const URL = `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${secret.API_KEY}`; */
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
                    <div>
                        <p>{headline.description}</p>
                        <p>{headline.title}</p>
                        <p><b>{headline.publishedAt}</b></p>
                        <img src={headline.urlToImage} />
                        <a href={headline.url}>Read More</a>
                        <br/><br/><br/>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderTopStories(this.state)}
            </div>
        );
    }

    componentDidMount() {
        this.getTopStories();
    }
}

export default TopStories;