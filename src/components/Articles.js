import React, { Component } from 'react';

// bootstrap components
import { Grid, Row, Col } from 'react-bootstrap';

// variables
import secret from '../config';

const URL = `https://newsapi.org/v2/everything`;
const news_Source = 'talksport';

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: {},
            error: ''
        }
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles () {
        fetch(`${URL}?sources=${news_Source}&apiKey=${secret.API_KEY}`, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    news: data
                })
            })
    }

    renderAllArticles = ({news}) => {
        let allArticles = news.articles;
        if (allArticles) {
            return allArticles.map((article) => {
                return (
                    <Row className="show-grid article-wrapper">
                        <Col md={4}>
                            <img src={article.urlToImage} className="article-img"/>
                        </Col>
                        <Col md={8}>
                            <h4>{article.title}</h4>
                            <p className="article-description">
                                {article.description}
                                <a href={article.url} target="_blank">Read More</a>
                            </p>
                            <p>Published on: <b>{article.publishedAt}</b></p>
                        </Col>
                    </Row>
                )
            })
        }
    }

    render() {
        return (
            <Grid className="article-container">
                <h3 className="mrg-btm-20">More News</h3>
                {this.renderAllArticles(this.state)}
            </Grid>
        );
    }
}

export default Articles;
