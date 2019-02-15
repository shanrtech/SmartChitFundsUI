import { Period } from './Period';
import { User } from './User';


export class Chit {
    id: number;
    name: string;
    startDate: Date;
    period: Period;
    periodId: number;
    amount : number;
    user   :User;
    commissionRupess :number;
    manager :boolean;
    commission :boolean;
}