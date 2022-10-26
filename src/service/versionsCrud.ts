import { Injectable, Param } from '@nestjs/common';
import connectDB from 'src/config/db_connection';
import { versions } from '../entity/versions';
import { updateVersions } from '../dto/updateVersions';
import { createVersions } from '../dto/createVersions';


@Injectable()
export class versionsCrud {

    // Get all versions records
    public async getVersions() {
        return await connectDB.manager.find(versions);
    }

    // Get one versions record
    public async getVersionsById(@Param('id') id: string) {
        return await connectDB.manager.findOne(versions, {where: {id: Number(id)}});
    }

    // Update existing versions record
    public async updateVersion(id: Number, version: updateVersions) {
        return await connectDB.manager.update(versions, id, version);
    }

    // Delete one versions record
    public async deleteVersion(id: Number) {
        return await connectDB.manager.delete(versions, id);
    }

    // Create a new versions record
    public async createVersion(version: createVersions) {
        return await connectDB.manager.insert(versions, version);
    }
    
}