import { Timestamp } from "firebase/firestore";

export interface PostType {
    name: string;
    message: string;
    email: string;
    image: string;
    timestamp: Timestamp | null;
    postUrl?: string;
}