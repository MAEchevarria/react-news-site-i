import { useState } from 'react'
import ArticleTeaser from './components/ArticleTeaser'
import Article from './components/Article'
import AppNav from './components/AppNav'
import News from './data/news.json'
import NavItems from './data/navItems.json'
import ArticleGroup from './components/ArticleGroup'

function App() {
  // takes imported NavItems and initializes useState as navItems
  // navItems are sent as props to AppNav
  const [navItems, setNavItems] = useState(NavItems)
  
  // random article useState -- save
  // const randArticleIndex = Math.floor(Math.random() * News.length);
  // const randArticle = News[randArticleIndex];
  // const [article, setArticle] = useState({
  //   id: randArticleIndex,
  //   title: randArticle.title,
  //   abstract: randArticle.abstract,
  //   byline: randArticle.byline,
  //   image: randArticle.multimedia.length ? randArticle.multimedia[0] : null,
  //   created_date: randArticle.created_date,
  // })

  const [articles, setArticles] = useState(News.map((article, index) => {
    return {
    id: index,
    title: article.title,
    abstract: article.abstract,
    byline: article.byline,
    image: article.multimedia.length ? article.multimedia[0] : null,
    created_date: article.created_date,
    }
  }))

  return (
    <div>
      <AppNav items={ navItems } />
      {/* for each article being passed to ArticleGroup, id and article itself */}
      {articles.map((article) => (
        <ArticleGroup key={article.id} article={article}/>
      ))}
    </div>
  )
}

export default App
