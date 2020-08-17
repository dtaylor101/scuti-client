import { ws } from "../../../main";

export class UserLoginEvent {
    constructor(dataParsed) {
        this.packet = dataParsed;
    }

    sendToServer() {
        ws.send(JSON.stringify(this.packet));
    }
}