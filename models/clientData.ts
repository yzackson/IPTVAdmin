import Client from "./client"

export default class ClientData {
    Id: string;
    Data: Client;

    constructor(Id: string, Data: Client) {
        this.Id = Id;
        this.Data = Data;
    }
}