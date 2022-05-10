import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { CampignService } from './campign.service';
import { CreateCampignDTO } from './dto/create-campign.dto';
import { UpdateCampignDTO } from './dto/update-campign.dto';
import { Campign } from './schemas/campign.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('campign')
export class CampignController {
    constructor(private campignService: CampignService) {}

    @Get()
    async getAllCampigns(
        @Query()
        query: ExpressQuery
    ): Promise<Campign[]> {
        return this.campignService.findAll(query);
    }

    @Post()
    async createCampign(
        @Body()
        campign: CreateCampignDTO
    ): Promise<Campign> {
        return this.campignService.create(campign);
    }

    @Get(':id')
    async getCampign(
        @Param('id')
        id: string
    ): Promise<Campign> {
        return this.campignService.findByID(id);
    }

    @Put(':id')
    async updateCampignByID(
        @Param('id')
        id: string,
        @Body()
        campign: UpdateCampignDTO,
    ): Promise<Campign> {
        await this.campignService.findByID(id);
        
        return this.campignService.updateByID(id, campign);
    }

    @Delete(':id')
    async deleteCampign(
        @Param('id')
        id: string
    ): Promise<{ deleted: Boolean}> {
        await this.campignService.findByID(id);

        const campign = this.campignService.deletByID(id);

        if(campign) {
            return {
                deleted: true
            }
        }
    }
}
