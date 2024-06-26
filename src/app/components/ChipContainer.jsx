import react from 'react'

const ChipContainer = ({children}) => {
    return <span className='mr-3 bg-laranja1 py-[3px] px-[8px] text-c2 text-laranja font-bold rounded-[20px]'>
        {children}
    </span>
}

export default ChipContainer