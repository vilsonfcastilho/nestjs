import { Schema, Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema()
export class Route {
  @Prop()
  title: string;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  start_position: {
    lat: number;
    lng: number;
  };

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  end_position: {
    lat: number;
    lng: number;
  };
}

export const RouteSchema = SchemaFactory.createForClass(Route);
