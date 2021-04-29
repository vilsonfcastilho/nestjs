import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Route, RouteDocument } from './entities/route.entity';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name)
    private routeModel: Model<RouteDocument>,
  ) {}

  async create(createRouteDto: CreateRouteDto) {
    const route = await this.routeModel.create(createRouteDto);

    return route;
  }

  async findAll() {
    const routes = await this.routeModel.find();

    return routes;
  }

  async findOne(id: string) {
    const route = await this.routeModel.findOne({ _id: id });

    return route;
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    await this.routeModel.updateOne({ _id: id }, updateRouteDto);

    const route = await this.routeModel.findOne({ _id: id });

    return route;
  }

  async remove(id: string) {
    await this.routeModel.deleteOne({ _id: id });
  }
}
