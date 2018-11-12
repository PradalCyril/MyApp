import  React  from  'react';



const  SimpsonAppel = ({ callQuote }) => {
    return (
        <div  className="CallQuote">
        <button  onClick={callQuote}>Get Quote</button>
        </div>
    );
};

export  default  SimpsonAppel;