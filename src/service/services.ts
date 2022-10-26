import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';
import connectDB from '../config/db_connection';
import { services } from '../entity/services';
import { versions } from '../entity/versions';

/**
 * Class provides helper functions to perform business logic
 */
@Injectable()
export class AppService {

  /**
   * @param id 
   * @returns The service with its version details
   */
  public async getServices(id: number): Promise<versions[]> {
    try {
      return await connectDB.manager.find(versions, {
        relations: {
          service: true,
        },
        where: {
          service: {
            id: id,
          },
        }
      });
    } catch(e) {
      console.log(e);
      throw e;
    }
    
  }

  /**
   * 
   * @param limit 
   * @param offset 
   * @param column 
   * @param order 
   * @param searchString 
   * @returns  List of services
   */
  public async getAllServices(limit: number, offset: number, column?: string, order?: string, searchString?: string): Promise<services[]> {
    if(order == null) {
      order='ASC';
    }
    if(column == null) {
      column='id';
    }
    try {
      return await connectDB.manager.find(services, {
        where: {
          name: Like('%'+searchString+'%')
        },
        order: {
          [column]: order,
        },
        skip: offset,
        take: limit,
      })
    } catch(e) {
      console.log(e);
      throw e;
    }
  }
}
