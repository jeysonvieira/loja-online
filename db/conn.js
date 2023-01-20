import mongoose from "mongoose";


async function main(){
    await mongoose.connect('mongodb://localhost:27017/lojaonline')

    console.log('Conectado com sucesso')
}

main().catch(err => {console.log(err)})


export default mongoose