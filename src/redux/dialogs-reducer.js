const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Zhenya', id: 3}
    ],
    messages: [
        {message: 'Hi', id: 1},
        {message: 'Yo', id: 2},
        {message: 'How are you?', id: 3}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body, id: 4}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
