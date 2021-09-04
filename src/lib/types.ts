interface Crime {
    date: Date;
    id: number;
    address: string;
    offense: string;
    size: number;
    lat: boolean | number;
    lon: boolean | number;
};

export type { Crime };