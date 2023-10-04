import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
    constructor(nome: string, accountNumber: number)
    {
        super(nome, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
          console.log('Voce depositou ', value + 10)
          this.balance = this.balance + value + 10
        }
      }
}