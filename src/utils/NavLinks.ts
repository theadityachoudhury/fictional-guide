//Defines all the nav links for the app with nested links
export const NavLinks = [
    {
        title: 'Home',
        path: '/',
        type: "link"
    },
    {
        title: 'About',
        path: '/about',
        type: "link"
    },
    {
        title: 'Contact',
        path: '/contact',
        type: "link"
    },
    {
        title: 'Pricing',
        path: '/pricing',
        type: "link"
    },
    {
        title: 'Admin',
        path: '/admin',
        logged: true,
        role: 'admin',
        type: "link"
    },
    {
        title: 'Login',
        path: '/login',
        type: "button",
        onclick: () => { window.location.href = '/auth/login' },
    },
    {
        title: 'Account',
        path: '/profile',
        type: 'link',
        logged: true,
        sub: [
            {
                title: 'Settings',
                path: '/settings',
                type: 'link',
                logged: true,
            },
            {
                title: 'Profile',
                path: '/profile',
                type: 'link',
                logged: true,
            },
            {
                title: 'Logout',
                path: '/logout',
                type: 'button',
                logged: true,
            },
        ]
    },

];