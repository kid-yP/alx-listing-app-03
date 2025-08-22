// Property listing interface

export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offer;
    image: string;
    discount: string;
}

// Address interface
interface Address {
    state: string;
    city: string;
    country: string;
}

interface Offer {
    bed: string;
    shower: string;
    occupants: string;
}