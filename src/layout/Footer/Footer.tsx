import { Link } from 'react-router-dom';
import Logo from '../../assets/Ellipse 99.svg'
import { navLinksArray2, socialMediaContacts } from '../../const/staticData';
const Footer = () => {
    return (
        <div className="gradient-footer px-2 w-full text-black">
            <div className='py-5 px-10 flex flex-col gap-10 md:flex-row justify-between'>
                <div className='max-[540px]:text-center min-[541px]:basis-[50%] flex min-[541px]:justify-between min-[541px]:gap-5 max-[540px]:flex-col flex-1'>
                    <div className='max-[540px]:mx-auto max-[540px]:pb-10 min-[541px]:basis-[20em]'>
                        <Link to={'/'} className='w-fit'>
                            <img src={Logo} alt={'logo'} className='max-[540px]:mx-auto'/>
                        </Link>
                        <p className='mt-3 mb-5 max-w-[18em]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h2>@Company.com</h2>
                    </div>
                    <ul className='min-w-[10em] max-[540px]:pb-10'>
                        <li className='font-bold mb-2'>Pages</li>
                        {navLinksArray2.map((e, i) => <li key={i} className='mb-1 duration-300 hover:translate-x-[5px]'>
                            <Link to={e.link}>{e.title}</Link>
                        </li>)}
                    </ul>
                    <ul className='md:w-full'>
                        <li className='font-bold mb-2'>Contact us</li>
                        <li className='mb-2 max-w-[18em] max-[540px]:mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>+9000 0000 0000</li>
                    </ul>
                </div>
                <div className='flex gap-2 items-end justify-center flex-wrap'>{socialMediaContacts.map((e, i) => <a key={i} href={e.link} className='bg-__main_dark p-3 rounded-full text-white hover:bg-__white_blue duration-300'>{e.icon}</a>)}</div>
            </div>
            <hr/>
            <p className='py-5 px-10 text-center'>Copyright &copy; 2024 Company All Rights Reversed</p>
        </div>
    )
}

export default Footer