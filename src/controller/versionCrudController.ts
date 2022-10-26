import { Controller, Get, Put, Param, Post, Body, Delete } from '@nestjs/common';
import { versionsCrud } from '../service/versionsCrud';
import { updateVersions } from '../dto/updateVersions';
import { createVersions } from '../dto/createVersions';

/**
 * REST controller for service crud requests
 */
 @Controller('/v1/versions')
 export class versionCrudController {
   constructor(private readonly versionCrud: versionsCrud) {}
 
   @Get(':id')
   public async getVersions(@Param('id') id) {
    return await this.versionCrud.getVersionsById(id);
   }

   @Get()
   public async getAllVersions() {
    return await this.versionCrud.getVersions();
   }

   @Put(':id')
   public async updateVersion(@Param('id') id, @Body() version: updateVersions) {
    return await this.versionCrud.updateVersion(id, version);
   }

   @Post()
   public async createVersion(@Body() version: createVersions) {
    return await this.versionCrud.createVersion(version);
   }

   @Delete(':id')
   public async deleteVersion(@Param('id') id) {
    return await this.versionCrud.deleteVersion(id);
   }
}