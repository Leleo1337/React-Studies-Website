import chefIcon from '../../../assets/challenges/c5/chef-claude-icon.png'

export default function challengeFiveHeader(){
    return(
        <>
            <img src={chefIcon} alt="Chef Claude icon" className='w-8' />
            <h1 className='font-normal text-2xl'>Chef Claude</h1>
        </>
    )
}