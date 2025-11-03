 // switch case 

 let AGE = 45;

    switch ( true ) {
        case ( AGE >= 0 && AGE <= 12 ):
            console.log ( ' person is a child ' );
            break;
        case ( AGE > 12 && AGE <= 19 ):
            console.log ( ' person is a teenager ' );
            break;      
        case ( AGE > 19 && AGE <= 60 ):
            console.log ( ' person is an adult ' );
            break;
        case ( AGE > 60 ):
            console.log ( ' person is a senior citizen ' );
            break;
        default:
            console.log ( ' invalid age ' );
    }


    
