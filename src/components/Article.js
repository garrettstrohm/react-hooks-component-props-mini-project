
function Article({ key, post:{ title, date="January 1, 1970", preview, minutes } }){

    function handleCoffeeEmoji({minutes}){
        if(minutes < 30){
            let number = Math.ceil(minutes / 5)
            let coffee = '☕';
            let coffeeText = <small>{coffee.repeat(number)}</small>
            return coffeeText
        } else {
            let number = Math.ceil(minutes / 10)
            let bentoBox = '🍱';
            let bentoText = <small>{bentoBox.repeat(number)}</small>
            return bentoText
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{handleCoffeeEmoji({minutes})}{minutes} to read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article