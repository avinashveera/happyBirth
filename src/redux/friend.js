const initialState={
    name:"",
    phone:null,
    whatsapp:null,
    facebook:"",
    instagram:"",
    birthday:""

}

const addFriend=(state=initialState,action)=>{

    if(action.type==="addfriend"){
        const {name,value}=action.payload
        return{
          ...state,
          [name]:value
        }
    }else{

        return{
            ...state
        }
            
    }


}

export {addFriend}