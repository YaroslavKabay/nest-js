import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email', // allows to rename username field to email in postman
        });
    }

    async validate(userName: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(userName, password);
        if (!user) {
            throw new UnauthorizedException();
        }//якщо юзера не найшло то кине цю помилку,
        return user;//якщо найшло то поверне юзера
    }
}