import { Base } from "../base";

export class RestartNoderedInstanceMessage implements IReplyMessage {
    public error: string;
    public jwt: any;

    static assign(o: any): RestartNoderedInstanceMessage {
        if (typeof o === "string" || o instanceof String) {
            return Object.assign(new RestartNoderedInstanceMessage(), JSON.parse(o.toString()));
        }
        return Object.assign(new RestartNoderedInstanceMessage(), o);
    }
}
