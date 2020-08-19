import $ from "jquery";
import {outgoingManager} from "../main";
import {OutgoingNavigatorEvent} from "../messages/outcoming/Outgoing";

export class Event {
    static navigatorEvents() {
        // Open navigator
        $("#navigator").click(function() {
            $("#navigator-component").toggle();
            outgoingManager.compose({
                packetId: OutgoingNavigatorEvent.OpenNavigator,
                data: {

                }
            })
        })

        // Create a room
        $("#createRoomAction").click(function () {
            const name = document.getElementById("roomName").value;
            console.log(name);
            if(name.length >= 2 && name.length <= 20) {
                outgoingManager.compose({
                    packetId: OutgoingNavigatorEvent.CreateRoomEvent,
                    data: {
                        roomName: name,
                    }
                })
                $("#createRoom").hide();
            }
        })
    }
}