import { client } from '@/app/contentful/contentful'
import { ContentfulGallery } from '@/app/contentful/types/gallery'
import React from 'react'

import styles from './gallery.module.scss'
import Image from 'next/image'

export const Gallery = async () => {
    const entries = await client.withoutUnresolvableLinks.getEntries<ContentfulGallery>({
        content_type: 'carGalery',
        order: ['fields.id']
    })

    const carGallery = entries.items

    return (
        <div className={styles.page}>
            <h3 className={styles.subtitle}>Galeria</h3>
            <div className={styles.gallery}>
                {carGallery.map((car) => (
                    <div className={styles.photo} key={car.fields.id}>
                        <Image
                            src={`https:${car.fields.carImage?.fields.file?.url}`}
                            width={10}
                            height={7}
                            alt={car.fields.carModel}
                        />
                        <h4>{car.fields.carModel}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
