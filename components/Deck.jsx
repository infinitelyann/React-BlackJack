
const Deck = ({deck})=>{
    return(
        <>
        {deck.map((card) => (
            <img src={card.image}/>
        ))}
        </>
    )
}
export default Deck