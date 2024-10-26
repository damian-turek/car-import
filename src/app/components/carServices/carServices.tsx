import React from 'react';
import Image from 'next/image';

import { client } from '@/app/contentful/contentful';
import { ContentfulCarServices } from '@/app/contentful/types/carServices'

import styles from './carServices.module.scss';

export const CarServices = async() => {
    const entries = await client.withoutUnresolvableLinks.getEntries<ContentfulCarServices>({
        content_type: 'services',
        order: ['fields.id']
    });

    const services = entries.items;

    return (
        <div>
            <h3>Co sprawdzam?</h3>
            <div className={styles.page}>
                {services.map((service) => (
                    <div className={styles.element} key={service.fields.id}>
                        {
                            service.fields.serviceIcon &&
                            <Image
                                src={`https:${service.fields.serviceIcon.fields.file?.url}`}
                                alt={service.fields.serviceTitle}
                                width={80}
                                height={80}
                            />
                        }
                        <h4>{service.fields.serviceTitle}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
