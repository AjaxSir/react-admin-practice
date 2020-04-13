import login from '../views/login'
import layout from '../layout/index.jsx'
import Home from '../layout/home'
import System from '../views/system'
import AuthSystem from '../views/system/auth'
import Welcome from '../views/welcome'
const routes = [{
        path: '/login',
        component: login,
    },
    {
        path: '/welcome',
        component: layout,
        hidden: true,
        children: [{
            title: '欢迎',
            path: '/welcome',
            Component: Welcome,
        }, ],
    },
    {
        path: '/dash',
        component: layout,
        title: '门店',
        children: [{
            title: '通行统计',
            path: '/dash/home',
            Component: Home,
        }, ],
    },
    {
        path: '/system',
        component: layout,
        title: '系统设置',
        children: [{
                title: '用户设置',
                path: '/system/user',
                Component: System,
            },
            {
                title: '权限设置',
                path: '/system/auth',
                Component: AuthSystem,
            },
        ],
    },
    {
        path: '*',
        component: login,
    },
]

export default routes