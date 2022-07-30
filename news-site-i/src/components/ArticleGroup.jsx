import {useState} from "react"
import Article from "./Article"
import ArticleTeaser from "./ArticleTeaser"

function ArticleGroup({article}) {
    const [showArticle, setShowArticle] = useState(false)

    const renderIfShow = () => {
        if (showArticle) {
            return <Article {...article} />
        }
    }

    const HandleTitleClick = () => {
        setShowArticle(!showArticle)
    }
    // can use a function to handle view
    // const renderIfShow = () => {
    //   if (showArticle) {
    //     return <Article {...article}/>
    //   }
    // }

    return (
        <div>
            <ArticleTeaser id={ article.id } title={ article.title } date={ article.created_date } handleClick={ HandleTitleClick }/>
            {/* {showArticle && <Article { ...article }/>} */}
            {/* {renderIfShow()} */}
             {showArticle ? <Article {...article}/> : ''}
        </div>
    )
}
export default ArticleGroup