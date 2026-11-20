export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface About {
    mission: string;
    history: string;
    teamMembers: string[];
}

export interface GalleryImage {
    id: string;
    url: string;
    description: string;
}