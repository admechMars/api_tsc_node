const db = [{
    name:"",
    email:""
}]

export class UserServices{
    createUser = (name: string, email:string) =>{
        const user = {
            name,
            email,
        }
        db.push(user)
        console.log("Db atualizado", db)
    }

    getAllUsers = () =>{
        return db
    }
    
}