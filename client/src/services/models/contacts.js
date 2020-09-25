import { http } from '../config';

export default {

    Find: () => {
        return http.get('contact');
    },

    Create: (contact) => {
        return http.post('contact', contact);
    },

    Delete: (id) => {
        return http.delete(`contact/${id}`);
    }
    
}

