import React, {useState} from 'react'
import s from './paginator.module.scss'

type PaginatorPropsType = {
    page: number
    setCurrentPage: (page: number) => void
    totalCount: number
    pageSize?: number
    portionSize?: number
}

export const Paginator = ({
                              page,
                              setCurrentPage,
                              totalCount,
                              pageSize = 10,
                              portionSize = 10
                          }: PaginatorPropsType) => {
    const pages: number[] = []
    const pagesCount = Math.ceil(totalCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pagesNumbers}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber -1)}>Left</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p}
                                className={`${s.pageNumber} ${page === p ? s.activePage : ''} `}
                                onClick={() => setCurrentPage(p)}>{p}
                </span>)}
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>Right</button>}
        </div>
    )
}

