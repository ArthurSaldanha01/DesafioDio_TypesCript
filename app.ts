import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)
const vipAccount: VipAccount = new VipAccount('Arthur', 2)
console.log(vipAccount)
vipAccount.deposit(100)
vipAccount.getBalance()