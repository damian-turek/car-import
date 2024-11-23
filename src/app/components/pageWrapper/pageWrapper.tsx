import React from 'react'

import styles from "./wrapper.module.scss"

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={styles.page}>
        {children}
    </div>
)