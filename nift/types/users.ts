export interface users {
    user_id: string;
}

export interface user_auth {
    user_id: string;
    email: string;
    wallet_address: string;
}

export interface user_status {
    user_id: string;
    is_company: boolean;
}

export interface user_detail {
    user_id: string;
    user_name: string;
    image_url: string;
}