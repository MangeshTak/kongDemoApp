import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { AppService } from '../service/services';
import { Response } from 'express';

/**
 * REST controller to handle the required API requests for assignment
 */
@Controller('/v1/services')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @param id 
   * @returns - The service with its version details
   */
  @Get(':id')
  async getServices(@Param('id') id, @Res() res: Response) {
    if(!id || isNaN(parseInt(id)))
      res.status(HttpStatus.BAD_REQUEST).json({"error": "Invalid input parameter"});
    else {
      const resObject = await this.appService.getServices(id);
      if(!resObject || resObject.length === 0)
        res.status(HttpStatus.NOT_FOUND).json(resObject);
      else
        res.status(HttpStatus.OK).json(resObject);
    }
  }

  /**
   * Supports pagination, sorting, filtering
   * 
   * @param limit 
   * @param offset 
   * @param column 
   * @param order 
   * @param searchString 
   * @returns - List of services 
   */
  @Get()
  async getAllServices(@Query('limit') limit, @Query('offset') offset, @Query('column') column, 
                 @Query('order') order, @Query('searchString') searchString, @Res() res: Response) {
    if(!limit || isNaN(parseInt(limit)) || !offset || isNaN(parseInt(offset)))
      res.status(HttpStatus.BAD_REQUEST).json({"error": "Invalid input parameter"});
    else {
      const resObject = await this.appService.getAllServices(limit, offset, column, order, searchString);
      if(!resObject || resObject.length === 0)
        res.status(HttpStatus.NOT_FOUND).json(resObject);
      else
        res.status(HttpStatus.OK).json(resObject);
    }
  }
}
