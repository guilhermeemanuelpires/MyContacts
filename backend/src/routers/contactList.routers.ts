import { Router } from 'express';
import ContactListController from '../controllers/contctList.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    private init() {
        this.router.get('/', ContactListController.Find);
        this.router.post('/', ContactListController.Create);
        this.router.delete('/:id([0-9]+)', ContactListController.Delete);
    }
}

export default new Routes().router;