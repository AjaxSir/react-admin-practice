import login from '../views/login/index.jsx'
import layout from '../layout/index.jsx'
import loadable from '../utils/loadable'
import User from '../views/system'
const routes = [{
        path: '/login',
        component: login,
    },

    {
        path: '/dash',
        component: layout,
        title: '系统设置',
        children: [{
                path: '/dash/welcome',
                component: layout,
                hidden: true,
                children: [{
                    title: '欢迎',
                    path: '/dash/welcome',
                    Component: loadable(() =>
                        import ('../views/welcome')),
                }, ],
            },
            {
                path: '/dash/system',
                component: layout,
                title: '系统设置',
                redirect: '/dash/system/user',
                children: [{
                        title: '用户设置',
                        path: '/dash/system/user',
                        Component: User,
                    },
                    {
                        title: '权限设置',
                        path: '/dash/system/auth',
                        Component: loadable(() =>
                            import ('../views/system/auth.jsx')),
                    },
                    {
                        title: '设备设置',
                        path: '/dash/system/device',
                        Component: loadable(() =>
                            import ('../views/system/device.jsx')),
                    },
                ],
            },
            {
                path: '/dash/door',
                component: layout,
                title: '门店',
                children: [{
                    title: '通行统计',
                    path: '/dash/door/home',
                    Component: loadable(() =>
                        import ('../layout/home')),
                }, ],
            },
        ],
    },
    {
        path: '*',
        component: login,
    },
]

export default routes