import $ from "jquery";

export class NavigatorRoomMessage {
    constructor(packet) {
        this.packet = packet;
    }

    execute() {
        const allRoomsTab = $('#allRoomsTab');
        allRoomsTab.empty();

        for(const name in this.packet.data) {
            if(this.packet.data.hasOwnProperty(name)) {
                let owner = this.packet.data[name].owner;
                let description = this.packet.data[name].description;

                const roomtab = $("<div></div>").addClass("roomtab");
                const thumbnail = $("<div></div>").addClass("thumbnail").css("background", "url()").appendTo(roomtab);
                const text = $("<div></div>").addClass("text").html(name + "<br>").appendTo(roomtab);
                const span = $("<span></span>").css("color", "#8F8E90").css("font-size", "14px").append(description).appendTo(text);
                const userCount = $("<div></div>").addClass("usercount grey").append("2").appendTo(roomtab);

				allRoomsTab.append(roomtab);
            }
        }
    }
}