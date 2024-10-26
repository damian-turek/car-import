import { EntryFieldTypes } from 'contentful'

export type ContentfulCarServices = {
    contentTypeId: 'services'
    fields: {
        id: EntryFieldTypes.Integer
        serviceTitle: EntryFieldTypes.Symbol
        serviceIcon: EntryFieldTypes.AssetLink
    }
}