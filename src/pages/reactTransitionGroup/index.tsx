import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    NavLink,
    useLocation,
    useOutlet
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import './style.css'

const routes = [
    { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
    { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
    {
        path: '/contact',
        name: 'Contact',
        element: <Contact />,
        nodeRef: createRef()
    }
]

const Example = () => <div>Example</div>

const router = createBrowserRouter([
    {
        path: '/',
        element: <Example />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element
        }))
    }
])

export default function ReactTransitionGroup() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef }: any = routes.find((route) => route.path === location.pathname) ?? {}
    return (
        <div className="container">
            react-transition-group
            <NavLink to="/ReactTransitionGroup/Home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/ReactTransitionGroup/About">
                <button>About</button>
            </NavLink>
            <NavLink to="/ReactTransitionGroup/Contact">
                <button>Contact</button>
            </NavLink>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {(state) => (
                        <div ref={nodeRef} className="page">
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
