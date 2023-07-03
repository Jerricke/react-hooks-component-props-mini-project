function Article({title, date = "January 1, 1970", preview, minutes}) {
    function emojis(minute) {
        let emoji = minute < 30 ? "☕️" : "🍱";
        if (emoji === "☕️") {
            return emoji = emoji.repeat(Math.round(minute/5));
        } else {
            return emoji = emoji.repeat(Math.round(minute/10));
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} • {emojis(minutes)} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;