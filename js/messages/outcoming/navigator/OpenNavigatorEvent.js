import { ws } from "../../../main";

export class OpenNavigatorEvent {
    constructor(dataParsed) {
        this.packet = dataParsed;
    }

    sendToServer() {
        console.log("Nav opened");
        ws.send(JSON.stringify(this.packet));
    }
}