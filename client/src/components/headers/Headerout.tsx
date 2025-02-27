import casino from '../../assets/images/casino.png'

const Header = () => {
  return (
    <div className=' flex items-center justify-between p-3 pl-10 pr-12 mx-[10%]'>
        <img src={casino} alt="" width={60} height={60} onClick={() => window.location.href = '/'}/>

        <div className='flex gap-6 '>
            <button className='bg-green-500 p-2 pl-4 pr-4 rounded-3xl' onClick={() => window.location.href = '/login'}>Login</button>
            <button className='bg-blue-500 p-2 pl-4 pr-4 rounded-3xl' onClick={() => window.location.href = '/register'}>Register</button>
        </div>
    </div>
  )
}

export default Header