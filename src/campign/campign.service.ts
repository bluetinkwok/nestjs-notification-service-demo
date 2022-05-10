import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
import { Campign } from './schemas/campign.schema';

@Injectable()
export class CampignService {
    constructor(
        @InjectModel(Campign.name)
        private campignModel: mongoose.Model<Campign>
    ) {}

    // Get all Campign => GET /campigns
    async findAll(query: Query): Promise<Campign[]> {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage -1);

        const keyword = query.keyword ? {
            name: {
                $regex: query.keyword,
                $options: 'i'
            }
        }: {}

        const campigns = await this.campignModel
            .find({ ...keyword })
            .limit(resPerPage)
            .skip(skip);

        return campigns;
    }

    // Create new cmapign => POST /campign
    async create(campign: Campign): Promise<Campign> {
        const cam = await this.campignModel.create(campign)
        return cam;
    }

    // Get Campgin by ID => GET /campign/:id
    async findByID(id: string): Promise<Campign> {
        const isValidId = mongoose.isValidObjectId(id);

        if(!isValidId) {
            throw new BadRequestException('Wrong mongoose ID. Please enter correct ID');
        }

        const campign = await this.campignModel.findById(id);

        if(!campign) {
            throw new NotFoundException('Campgin not found.');
        }

        return campign;
    }

    // Update Campgin by ID => /POST /campign/:id
    async updateByID(id: string, campign: Campign): Promise<Campign> {
        return await this.campignModel.findByIdAndUpdate(id, campign, {
            new: true,
            runValidators: true
        });
    }

    // Delete Campign By ID => /DELETE /campign/:id
    async deletByID(id: string): Promise<Campign> {
        return await this.campignModel.findByIdAndDelete(id);
    }
}
