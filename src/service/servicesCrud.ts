import { Injectable, Param } from '@nestjs/common';
import connectDB from 'src/config/db_connection';
import { services } from '../entity/services';
import { updateServices } from '../dto/updateServices';
import { createServices } from '../dto/createServices';


@Injectable()
export class servicesCrud {

    // Update existing service
    public async updateService(id: Number, service: updateServices) {
        return await connectDB.manager.update(services, id, service);
    }

    // Delete one service
    public async deleteService(id: Number) {
        return await connectDB.manager.delete(services, id);
    }

    // Create a new service record
    public async createService(service: createServices) {
        return await connectDB.manager.insert(services, service);
    }

}