import { OutgoingUserEvents } from "./Outgoing.js";
import { UserLoginEvent } from "./user/UserLoginEvent.js";
import $ from "jquery";
import {outgoingManager} from "../../main";
import {OutgoingNavigatorEvent} from "./Outgoing";
import {OpenNavigatorEvent} from "./navigator/OpenNavigatorEvent";
import {CreateRoomEvent} from "./navigator/CreateRoomEvent";

export class OutgoingManager {
    constructor() {
        this.events = new Map();

        //load
        this.registerUserEvents();
        this.registerNavigatorEvents();
    }

    compose(packet) {
        let eventClass = this.events.get(packet.packetId);
        console.log(packet);
        console.log(eventClass);
        let event = new eventClass(packet);
        event.sendToServer();
    }

    registerUserEvents() {
        this.events.set(OutgoingUserEvents.UserLoginEvent, UserLoginEvent);
    }

    registerNavigatorEvents() {
        this.events.set(OutgoingNavigatorEvent.OpenNavigator, OpenNavigatorEvent);
        this.events.set(OutgoingNavigatorEvent.CreateRoomEvent, CreateRoomEvent)
    }

    UIEvent() {
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