import '../style/activities.css'

export default function CardActivity({card}){

    return(
        <div className='activity-conteiner' key={card.nameActivity}> 
            <div className='activity-image-conteiner'> <img className='activity-image' src={card.imageActivity} alt="weqw"/></div>
            <div className='activity-text-conteiner'>
                <div className='text'>{card.nameActivity}</div>
                <div className='text description'>{card.descriptionActivity}</div>
            </div>
        </div>
    )
} 