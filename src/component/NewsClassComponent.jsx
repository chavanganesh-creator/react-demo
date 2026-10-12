import React from 'react'
import NewsItemClassComponent from './NewsItemClassComponent.jsx'
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types'

class NewsClassComponent extends React.Component {
    static propTypes = {
        colorMode: PropTypes.string,
        city: PropTypes.string
    };
    static defaultProps = {
        city: 'India'
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false
        }
    }

    componentDidMount() {
        this.fetchArticles(this.props.city);
    }

    componentDidUpdate(previousProps) {
        if (previousProps.city !== this.props.city) {
            this.fetchArticles(this.props.city);
        }
    }

    async fetchArticles(city) {
        const query = {
            $query: {
                locationUri: `http://en.wikipedia.org/wiki/${city}`
            },
            $filter: {
                forceMaxDataTimeWindow: '31'
            }
        };
        const URL = `https://eventregistry.org/api/v1/article/getArticles?query=${encodeURIComponent(JSON.stringify(query))}&resultType=articles&articlesSortBy=date&includeConceptLabel=false&includeConceptDescription=true&apiKey=4a0529c3-9761-490e-96a2-ac259552eaac`;
        try {
            this.setState({ loading: true });
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`News request failed: ${response.status}`);
            }

            const data = await response.json();
            const articles = (data.articles?.results ?? []).map(article => ({
                id: article.uri,        
                title: article.title,
                body: article.body,
                image: article.image,
                url: article.url,
                date: article.dateTimePub,
                author: article.source?.title,
            }));
            this.setState({ articles, loading: false });
        } catch (error) {
            console.error('Error fetching articles:', error);
            this.setState({ loading: false });
        }   
    }  

    render() {
        return (
            <div className="container">
                {this.state.loading && <Spinner/>}
                <h1 className={`my-2 text-decoration-underline text-${this.props.colorMode===null  || this.props.colorMode === 'dark' ? 'light' : 'dark'}`}>News Articles</h1>
                <div className="row g-3">
                    {this.state.articles.map((newsItem) => (
                        <NewsItemClassComponent key={newsItem.id} article={newsItem} />
                    ))}
                </div>
            </div>
        )
    }
}



export default NewsClassComponent

// this.state = {
//             articles: [
//                 {
//                     id: 1,
//                     title: 'New Technology Trends in 2026',
//                     body: 'Artificial intelligence and cloud computing continue to transform the way businesses develop and deliver software. Companies are adopting modern technologies to improve productivity and customer experience.',
//                     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
//                 },
//                 {
//                     id: 2,
//                     title: 'Electric Vehicles Are Growing Rapidly',
//                     body: 'Electric vehicle adoption is increasing around the world as manufacturers introduce new models with better battery technology, longer range, and faster charging capabilities.',
//                     image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7'
//                 },
//                 {
//                     id: 3,
//                     title: 'Cloud Computing Becomes More Popular',
//                     body: 'Cloud platforms are becoming an important part of modern software development. Developers can use cloud services to deploy applications faster and scale them according to business requirements.',
//                     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
//                 },
//                 {
//                     id: 4,
//                     title: 'AI Helps Businesses Improve Productivity',
//                     body: 'Organizations are using artificial intelligence to automate repetitive tasks, analyze large amounts of data, and provide faster services to their customers.',
//                     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
//                 },
//                 {
//                     id: 5,
//                     title: 'Developers Adopt Modern Web Technologies',
//                     body: 'Modern frontend frameworks and development tools are helping developers build faster and more interactive web applications with improved user experiences.',
//                     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
//                 }
//             ]
//         }