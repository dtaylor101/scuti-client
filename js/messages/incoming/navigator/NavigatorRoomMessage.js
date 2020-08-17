export class NavigatorRoomMessage {
    constructor(packet) {
        this.packet = packet;
    }

    execute() {
        for(const name in this.packet.data) {
            if(this.packet.data.hasOwnProperty(name)) {
                let owner = this.packet.data[name].owner;
                let description = this.packet.data[name].description;

                var component = [
					'<div class="roomtab">',
					'<div class="thumbnail" style="background-image: url(img/1.png);">',
					'</div>',
					'<div class="text">',
					name + '<br/><span style="color: #8F8E90; font-size: 14px;">' + owner + '</span>',
					'</div>',
					'<div class="usercount grey">',
					'0',
					'</div>',
					'</div>'
					
					
		
				];
				$('#allRoomsTab').append(component.join(''));
            }
        }
    }
}