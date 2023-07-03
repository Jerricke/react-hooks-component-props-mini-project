import Article from "./Article";

function ArticleList({posts}) {

    const articlesList = posts.map( data => (
        <Article 
        key={data.id} 
        title={data.title} 
        date ={data.date} 
        preview={data.preview}
        minutes={data.minutes}
        />
    ));

    return <main>{articlesList}</main>
}

export default ArticleList;

