import { getCustomRepository } from 'typeorm';
import { userRepositories } from "../repositories/usersRepositories";

interface UserRequest {
    name: string;
    email: string;
    admin?: boolean;
}
class CreateUserService {
    async execute({ name, email, admin }: UserRequest) {
        const userRepository = getCustomRepository(userRepositories);

        //veriicação se email está preenchido
        if(!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await userRepository.findOne({
            email
        })
        
        //verifica se email já existe
        if(userAlreadyExists){
            throw new Error("User already exists"); 
        }

        const user = userRepository.create({
            name,
            email,
            admin
        })

        //salvando no banco de dados
        await userRepository.save(user)

        return user;
    }
}

export { CreateUserService };