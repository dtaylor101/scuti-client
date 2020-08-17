import { OutgoingUserEvents } from "./Outgoing.js";
import { UserLoginEvent } from "./user/UserLoginEvent.js";
import $ from "jquery";
import {outgoingManager} from "../../main";
import {OutgoingNavigatorEvent} from "./Outgoing";
import {OpenNavigator} from "./navigator/OpenNavigator";

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
        this.events.set(OutgoingNavigatorEvent.OpenNavigator, OpenNavigator);
    }

    UIEvent() {
        $("#navigator").click(function() {
            $("#navigator-component").toggle();

            outgoingManager.compose({
                packetId: OutgoingNavigatorEvent.OpenNavigator,
                data: {

                }
            })

        })
    }
}