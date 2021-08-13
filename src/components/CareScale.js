function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'
    
    let text = ''
    if(scaleValue === 1 && careType === 'light') {
        text="peu de lumière"
    } else if (scaleValue === 2 && careType === 'light') {
        text="modérement de lumière"
    } else if  (scaleValue === 3 && careType === 'light') {
        text="beaucoup de lumière"
    } else if  (scaleValue === 1 && careType === 'water') {
        text="peu d'arrosage"
    } else if  (scaleValue === 2 && careType === 'water') {
        text="modérement d'arrosage'"
    } else  {
        text="beaucoup d'arrosage"
    }

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} onClick={() => alert(`Cette plante requiert ${text}`)}> {scaleType} </span> 
                    : 
                    null 
            )} 
        </div>
        
        
        
        )
}

export default CareScale