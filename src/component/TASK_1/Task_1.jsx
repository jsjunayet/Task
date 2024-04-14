import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import HomeCard from './HomeCard';
import Contact from './Contact';
import Profile from './Profile';
import { FaCode } from "react-icons/fa";
const Task_1 = () => {
    const menu = [
        {
            "catagory": "Home",
            "Title": "We move your World!",
            "Description1": "Curabitur nec eros eu sapien vestibulum fermentum. Nulla lacinia lacinia est, eu fermentum justo. Fusce eu sem ac leo eleifend faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas scelerisque lobortis purus, sed interdum felis fermentum nec. Cras aliquam vel tortor sed suscipit.",
            "Description2": "Curabitur nec eros eu sapien vestibulum fermentum. Nulla lacinia lacinia est, eu fermentum justo. Fusce eu sem ac leo eleifend faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas scelerisque lobortis purus, sed interdum felis fermentum nec. Cras aliquam vel tortor sed suscipit."
        },
        {
            "catagory": "Profile",
            "img": "https://i.ibb.co/NS6Z9x1/atik-vai.jpg",
            "Title": "Media Heading",
            "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus at dolor congue consectetur. Phasellus nec nisi vitae libero sollicitudin malesuada. Proin ut feugiat nulla. Cras sodales magna sed leo vehicula, sed vehicula sem viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus at dolor congue consectetur. Phasellus nec nisi vitae libero sollicitudin malesuada. Proin ut feugiat nulla. Cras sodales magna sed leo vehicula, sed vehicula sem viverra."
        },
        {
            "catagory": "Contact",
            "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus at dolor congue consectetur. Phasellus nec nisi vitae libero sollicitudin malesuada. Proin ut feugiat nulla. Cras sodales magna sed leo vehicula, sed vehicula sem viverra. Mauris et ex vitae mauris auctor lacinia. Fusce quis nisi eget odio suscipit ullamcorper. Nulla facilisi. Ut viverra semper sapien, at vestibulum nunc vehicula ac. Vestibulum at aliquet metus. Aliquam erat volutpat. Quisque id arcu non velit auctor rhoncus. In vehicula massa vitae ex hendreri Curabitur nec eros eu sapien vestibulum fermentum. Nulla lacinia lacinia est, eu fermentum justo. Fusce eu sem ac leo eleifend faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas scelerisque lobortis purus, sed interdum felis fermentum nec. Cras aliquam vel tortor sed suscipit. Suspendisse vestibulum mi non sapien laoreet, nec dignissim mauris malesuada."
        },
    ]
    const [tabIndex, setTabIndex] = useState(0);
    const home = menu.filter((item) => item.catagory == 'Home')
    const profile = menu.filter((item) => item.catagory == 'Profile')
    const contact = menu.filter((item) => item.catagory == 'Contact')
    const Dashboard = menu.filter((item) => item.catagory == 'dashboard')

    return (
        <div className=' max-w-7xl mx-auto '>
            <div className='flex justify-between items-center mt-5 mb-10'>
                <div>
                    <p className='text-2xl font-semibold'>Simple Tabs</p>
                </div>
                <div className='flex gap-2  items-center'>
                    <FaCode className='text-2xl' />
                    <p className='text-xl font-semibold'>Code</p>
                </div>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <div className=" text-xl">
                    <TabList>
                        <Tab><div className={`cursor-pointer ${tabIndex === 0 ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>Home</div></Tab>
                        <Tab><div className={`cursor-pointer ${tabIndex === 1 ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>Profile</div></Tab>
                        <Tab><div className={`cursor-pointer ${tabIndex === 2 ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>Contact</div></Tab>
                        <Tab disabled>Dashboard</Tab>

                    </TabList>
                </div>

                <TabPanel>
                    <HomeCard items={home}></HomeCard>
                </TabPanel>
                <TabPanel>
                    <Profile items={profile}></Profile>
                </TabPanel>
                <TabPanel>
                    <Contact items={contact}></Contact>
                </TabPanel>
                <TabPanel>
                    <HomeCard items={Dashboard}></HomeCard>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Task_1;