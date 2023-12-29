import React from 'react'
import { Navigate, useRoutes, createHashRouter } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import Login from '@/pages/login'
import Page404 from '@/pages/page404'
import ComponentTabs from '@/pages/tabs'
import StrategicMode from '@/components/StrategicMode'
import EditTable from '@/pages/editTable'
import ClassEditTable from '@/pages/editTable/classEditTable'
import ClassComponent from '@/pages/editTable/ClassComponent'
import DesignPatterns from '@/components/DesignPatterns'
import FormList from '@/pages/formList'
import Chat from '@/layouts/chat'
import Context from '@/pages/context'
import Todo from '@/pages/todo'
import ScrollPage from '@/pages/scrollx'
import SingletonComponent from '@/pages/singletonComponent'
import PreImage from '@/pages/preImage'
import Batflow from '@/pages/batflow'
import Forms from '@/pages/batflow/forms'
import Demos from '@/pages/demos'
import Dexie from '@/pages/dexie'
import TransitionGroup from '@/pages/transitionGroup'
import ReactTransitionGroup from '@/pages/reactTransitionGroup'
import Home from '@/pages/reactTransitionGroup/Home'
import About from '@/pages/reactTransitionGroup/About'
import Contact from '@/pages/reactTransitionGroup/Contact'
import Demo1 from '@/pages/demo1'
import Iframe from '@/pages/demos/Iframe'

export const rootRouter = [
    {
        path: '/',
        element: <Navigate to="/Batflow" />
    },
    {
        path: '/ReactTransitionGroup',
        element: <ReactTransitionGroup />,
        meta: {
            requiresAuth: false,
            title: 'ReactTransitionGroup',
            key: 'ReactTransitionGroup'
        },
        children:[
            {
                path: 'Home',
                element: <Home />,
                meta: {
                    requiresAuth: false,
                    title: 'Home',
                    key: 'Home'
                },
            },
            {
                path: 'About',
                element: <About />,
                meta: {
                    requiresAuth: false,
                    title: 'Home',
                    key: 'Home'
                },
            },
            {
                path: 'Contact',
                element: <Contact />,
                meta: {
                    requiresAuth: false,
                    title: 'Home',
                    key: 'Home'
                },
            }
        ]
    },
    {
        path: '/iframe',
        element: <Iframe />,
        meta: {
            requiresAuth: false,
            title: 'Iframe',
            key: 'Iframe'
        }
    },
    {
        path: '/Batflow',
        element: <Batflow />,
        meta: {
            requiresAuth: false,
            title: 'Batflow',
            key: 'Batflow'
        }
    },
    {
        path: '/demo',
        element: <Demos />,
        meta: {
            requiresAuth: false,
            title: 'Demos',
            key: 'Demos'
        }
    },
    {
        path: '/transitionGroup',
        element: <TransitionGroup />,
        meta: {
            requiresAuth: false,
            title: 'transitionGroup',
            key: 'transitionGroup'
        }
    },
    {
        path: '/dexie',
        element: <Dexie />,
        meta: {
            requiresAuth: false,
            title: 'dexie',
            key: 'dexie'
        }
    },
    {
        path: '/form',
        element: <Forms />,
        meta: {
            requiresAuth: false,
            title: 'Forms',
            key: 'Forms'
        }
    },

    {
        path: '/img',
        element: <PreImage />,
        meta: {
            requiresAuth: false,
            title: 'PreImage',
            key: 'PreImage'
        }
    },
    {
        path: '/chat',
        element: <Chat />,
        meta: {
            requiresAuth: false,
            title: 'chat',
            key: 'chat'
        }
    },

    {
        path: '/context',
        element: <Context />,
        meta: {
            requiresAuth: false,
            title: 'context',
            key: 'context'
        }
    },
    {
        path: '/todo',
        element: <Todo />,
        meta: {
            requiresAuth: false,
            title: 'todo',
            key: 'todo'
        }
    },
    {
        path: '/ScrollPage',
        element: <ScrollPage />,
        meta: {
            requiresAuth: false,
            title: 'ScrollPage',
            key: 'ScrollPage'
        }
    },
    

    {
        path: '/componentTabs',
        element: <ComponentTabs />,
        meta: {
            requiresAuth: false,
            title: 'componentTabs',
            key: 'componentTabs'
        }
    },
    {
        path: '/strategicMode',
        element: <StrategicMode />,
        meta: {
            requiresAuth: false,
            title: 'strategicMode',
            key: 'strategicMode'
        }
    },
    {
        path: '/designPatterns',
        element: <DesignPatterns />,
        meta: {
            requiresAuth: false,
            title: 'designPatterns',
            key: 'designPatterns'
        }
    },
    {
        path: '/editTable',
        element: <ClassComponent />,
        meta: {
            requiresAuth: false,
            title: 'editTable',
            key: 'editTable'
        }
    },
    {
        path: '/FormList',
        element: <FormList />,
        meta: {
            requiresAuth: false,
            title: 'FormList',
            key: 'FormList'
        }
    },

    {
        path: '/demo1',
        element: <Demo1 />,
        meta: {
            requiresAuth: false,
            title: 'FormList',
            key: 'FormList'
        }
    },


    // {
    //   path: "/button",
    //   element: <Button />,
    //   meta: {
    //     requiresAuth: false,
    //     title: "Button",
    //     key: "Button",
    //   },
    // },
    // {
    //   path: "/Demo_GridBox",
    //   element: <Demo_GridBox />,
    //   meta: {
    //     requiresAuth: false,
    //     title: "Demo_GridBox",
    //     key: "Demo_GridBox",
    //   },
    // },

    {
        path: '/404',
        element: <Page404 />,
        meta: {
            requiresAuth: false,
            title: '404',
            key: '404'
        }
    },

    {
        path: '*',
        element: <Navigate to="/404" />
    }
]


const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}

export default Router
