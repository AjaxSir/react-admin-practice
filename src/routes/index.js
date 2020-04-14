import login from '../views/login/index.jsx'
import layout from '../layout/index.jsx'
import loadable from '../utils/loadable'
import User from '../views/system'
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
            Component: loadable(() =>
                import ('../views/welcome')),
        }, ],
    },
    {
        path: '/dash',
        component: layout,
        title: '门店',
        children: [{
            title: '通行统计',
            path: '/dash/home',
            Component: loadable(() =>
                import ('../layout/home')),
        }, ],
    },
    {
        path: '/system',
        component: layout,
        title: '系统设置',
        children: [{
                title: '用户设置',
                path: '/system/user',
                Component: User,
            },
            {
                title: '权限设置',
                path: '/system/auth',
                Component: loadable(() =>
                    import ('../views/system/auth.jsx')),
            },
            {
                title: '设备设置',
                path: '/system/device',
                Component: loadable(() =>
                    import ('../views/system/device.jsx')),
            },
        ],
    },
    {
        path: '*',
        component: login,
    },
]

export default routes