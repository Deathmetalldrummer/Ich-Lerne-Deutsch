export default {
    state: {
        bookSearch: '',
        bookSearchLevel: [],
        books: [
            {
                id: '01',
                title: 'Harry Potter 1',
                description: 'Первая книга о Гарри Поттере',
                imageId: '',
                level: ['B2','C1'],
                rating: 4,
                ratingCount: 100,
                parts: [
                    {id: 1,
                    title: 'Глава 1'}
                ],
            },{
                id: '02',
                title: 'Harry Potter 2',
                description: 'Вторая книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['B1','B2'],
                rating: 4.5,
                ratingCount: 123,
            },{
                id: '03',
                title: 'Harry Potter 3',
                description: 'Третья книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['C1','C2'],
                rating: 3,
                ratingCount: 80,
            },{
                id: '04',
                title: 'Harry Potter 4',
                description: 'Четвертая книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['B1','B2'],
                rating: 5,
                ratingCount: 40,
            },{
                id: '05',
                title: 'Harry Potter 5',
                description: 'Пятая книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['A2'],
                rating: 3.5,
                ratingCount: 200,
            },{
                id: '06',
                title: 'Harry Potter 6',
                description: 'Шестая книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['A2'],
                rating: 3.5,
                ratingCount: 200,
            },{
                id: '07',
                title: 'Harry Potter 7',
                description: 'Седьмая книга о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['A2'],
                rating: 3.5,
                ratingCount: 200,
            },
        ],
        bookParts: [
            {
                id: 1,
                bookId: 1,
                content: []
            },
        ]
    },
    getters: {
        book: state => param => state.books.filter(book => {console.log(param,book);return book.id === param})[0],
        bookList: state => state.books.filter(book=>{
            if (state.bookSearch.length || state.bookSearchLevel.length){
                let search = state.bookSearch.toLowerCase();
                let Title = search.length ? (book.title.toLowerCase().indexOf(search) > -1) : false;
                let Description = search.length ? (book.description.toLowerCase().indexOf(search) > -1) : false;
                let SearchLevel = !!book.level.filter(val => state.bookSearchLevel.indexOf(val) > -1).length;
                return Title || Description || SearchLevel;
            } else {
                return true;
            }
        }),
        bookSearch: state => state.bookSearch,
        bookSearchLevel: state => state.bookSearchLevel,
    },
    mutations: {
        bookSearch: (state, payload) => {state.bookSearch = payload},
        bookSearchLevel: (state, payload) => {state.bookSearchLevel = payload}
    },
    actions: {
        bookSearch: ({commit}, payload) => {commit('bookSearch',payload)},
        bookSearchLevel: ({commit}, payload) => {commit('bookSearchLevel',payload)}
    }
}
