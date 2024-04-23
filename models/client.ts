export default class Client {
    Name: string;
    Whatsapp: string;
    IPTVServer: string;
    ContractDate: Date;
    RenewDate: Date;

    constructor(Name: string, Whatsapp: string, IPTVServer: string, ContractDate: Date, RenewDate: Date) {
        this.Name = Name;
        this.Whatsapp = Whatsapp;
        this.IPTVServer = IPTVServer;
        this.ContractDate = ContractDate;
        this.RenewDate = RenewDate;
    }
}

