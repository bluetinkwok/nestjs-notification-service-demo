import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export enum Category {
    PROMOTION = 'Promotion',
    NOTIFICATION = 'Notification',
}

export enum Channel {
    SMS = 'SMS',
    MMS = 'MMS',
    EMAIL = 'Email',
    APP_NOTIFICATION = 'App Notification',
    WHATSAPP = 'Whatspp',
}

@Schema()
export class Campign {
    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    category: Category

    @Prop()
    channel: Channel

    @Prop()
    sendAt: string
    
    @Prop()
    image?: object[]
}

export const CampignSchema = SchemaFactory.createForClass(Campign)