import  React  from  'react';

const  SimpsonQuote = ({ simQuote }) => {
    return (
        <div  className="SimpsonQuote">
            <img  src={simQuote.image}  alt="picture"  />
            <ul>
                <li>character : {simQuote.character}</li>
                <li>
                    quote : {simQuote.quote}
                </li>
                <li>characterDirection : {simQuote.characterDirection}</li>
                
            </ul>
        </div>
    );
};

export  default  SimpsonQuote;