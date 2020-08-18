import { ws } from "../../../main";

export class CreateRoomEvent {
    constructor(dataParsed) {
        this.packet = dataParsed;
    }

    sendToServer() {
        console.log("Room '" + this.packet.data.roomName + "' created!");
        ws.send(JSON.stringify(this.packet));
    }
}