export default {
    state: {
        bookSearch: '',
        bookSearchLevel: [],
        books: [
            {
                id: 'sldkkgnskasfasdgipe',
                title: 'Harry Potter und der Stein der Weisen - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['B2','C1'],
                rating: 4,
                ratingCount: 100,
            },{
                id: 'sldfwawkkgnskjdgipe',
                title: 'Harry Potter und der Stein der Weisen - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['B1','B2'],
                rating: 4.5,
                ratingCount: 123,
            },{
                id: 'sldkkgnskjdgiafwpe',
                title: 'Harry Potter und der Stein der Weisen - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['C1','C2'],
                rating: 3,
                ratingCount: 80,
            },{
                id: 'sldasfkkgwawfnskjdgipe',
                title: 'Harry Potter und der Stein der Weisen - 4',
                description: 'Четвертая глава первой книги о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['B1','B2'],
                rating: 5,
                ratingCount: 40,
            },{
                id: 'sldkkgasdnskjdasdagipe',
                title: 'Harry Potter und der Stein der Weisen - 5',
                description: 'Пятая глава первой книги о Гарри Поттере',
                imageId: '',
                parts: 7,
                level: ['A2'],
                rating: 3.5,
                ratingCount: 200,
            },
        ]
    },
    getters: {
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
