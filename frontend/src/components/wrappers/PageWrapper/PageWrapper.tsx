import { ReactNode, Children } from 'react'
import style from './PageWrapper.module.scss'

function PageWrapper(props: { children: ReactNode }) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {Children.map(props.children, (child) => (
                    <div>{child}</div>
                ))}
            </div>
        </div>
    )
}

export default PageWrapper
