

const reducer  = (state = {username:'Employee_One@gmail.com',password:'Employee123',userLogedIn:false}
,{type,payload}) =>{

    switch (type){
        case 'USER-LOGED-IN':
     
            return {...state,userLogedIn:true}
        default:
            

            return state;

    }
}

export default reducer;