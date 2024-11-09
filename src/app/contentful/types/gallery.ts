import { EntryFieldTypes } from 'contentful'

export type ContentfulGallery = {
    contentTypeId: 'carGalery'
    fields: {
        id: EntryFieldTypes.Integer
        carModel: EntryFieldTypes.Symbol
        carImage: EntryFieldTypes.AssetLink
    }
}