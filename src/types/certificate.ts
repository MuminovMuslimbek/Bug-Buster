export interface Participant {
    id: number;
    name: string;
    image: string;
}

export interface Certificate {
    id: number;
    event: string;
    date: string;
    participants: Participant[];
}
