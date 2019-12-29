export default {
    state: {
        menuAuth: [
            {
                icon: 'visibility',
                title: 'Читать',
                route: '/books'
            },
            {
                icon: 'extension',
                title: 'Учить слова',
                route: '/words'
            },
            {
                icon: 'account_circle',
                title: 'Мой кабинет',
                route: '/profile'
            },
            {
                icon: 'exit_to_app',
                title: 'Выйти',
                route: '/signout'
            }
        ],
        menu: [
            {
                icon: 'visibility',
                title: 'Читать',
                route: '/books'
            },
            {
                icon: 'input',
                title: 'Войти',
                route: '/signin'
            },
            {
                icon: 'lock_open',
                title: 'Зарегестрироваться',
                route: '/signup'
            }
        ],
    },
    getters: {
        menu: state => conditional => conditional ? state.menuAuth : state.menu
        // menu: state => state.menu.filter(item => item.title.indexOf(state.getters.isAuthenticated ? 'Зарегестрироваться' : 'Войти') === -1)
    },
    mutations: {
    },
    actions: {
    },
}
