import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello', currentLike: 12},
                {id: 2, message: "Yo", currentLike: 11}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {name: 'Dimych', id: 1},
                {name: 'Sveta', id: 2},
                {name: 'Zhenya', id: 3}
            ],
            messages: [
                {message: 'Hi', id: 1},
                {message: 'Yo', id: 2},
                {message: 'How are you?', id: 3}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('privet')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};


export default store;
window.store = store;