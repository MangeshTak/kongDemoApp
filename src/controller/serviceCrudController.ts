import { Controller, Get, Put, Param, Post, Body, Delete } from '@nestjs/common';
import { servicesCrud } from '../service/servicesCrud';
import { updateServices } from '../dto/updateServices';
import { createServices } from '../dto/createServices';

/**
 * REST controller for service crud requests
 */
 @Controller('/v1/services')
 export class serviceCrudController {
   constructor(private readonly serviceCrud: servicesCrud) {}
 
   @Put(':id')
   public async updateService(@Param('id') id, @Body() service: updateServices) {
    return await this.serviceCrud.updateService(id, service);
   }

   @Post()
   public async createService(@Body() service: createServices) {
    return await this.serviceCrud.createService(service);
   }

   @Delete(':id')
   public async deleteService(@Param('id') id) {
    return await this.serviceCrud.deleteService(id);
   }
}