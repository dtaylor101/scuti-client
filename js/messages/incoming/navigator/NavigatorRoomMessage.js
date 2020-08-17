export class NavigatorRoomMessage {
    constructor(packet) {
        this.packet = packet;
    }

    execute() {
        for(const name in this.packet.data) {
            if(this.packet.data.hasOwnProperty(name)) {
                let owner = this.packet.data[name].owner;
                let description = this.packet.data[name].description;

                // JQUERY: Add this room to the navigator with name/ownerID/description data
            }
        }
    }
}