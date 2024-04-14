import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type:"sqlite",
    database:"./src/database/db.sqlite",
    migrations:[
        './src/database/*.ts'
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((error) => {
        console.error(error)
    })
