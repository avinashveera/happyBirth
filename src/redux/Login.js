const inititlstate = {
    value: {
        name: "",
        password: ""

    }

}

const LoginReducer = (state = inititlstate, action) => {

    if (action.type === "login") {
        const [name, Value] = action.payload

        if (name === "name") {
            return {
                value: {

                    name: Value,
                    password: state.value.password

                }
            }
        } if(name === "password"){


            return {
                value: {

                    name: state.value.name,
                    password: Value
                }
            

        }
    }
        
        else {

            return {
                value: {

                    name: state.value.name,
                    password: state.value.password
                }
            }
        }


    } else {
        return {
            ...state
        }
    }
}


const login=(state={token:null},action)=>{

    const token=localStorage.getItem('token')
    
    if(action.type==="logged"){

        return {
            token:token
        }

    }else{
        return {
            token:token
        }
    }

}


export { LoginReducer  ,login };