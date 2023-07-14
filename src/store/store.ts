import { useState } from "react";

type StateType=   { 
    author: string, // берётся из первого экрана, имя автора 
    title: string, // берётся из первого экрана, название статьи 
    text: string, // берётся из второго экрана, текст статьи 
    isDraft: boolean // берётся из третьего экрана, галочка "черновик" 
 } 

 type StoreType={

 }

export let Store={
    _State: {
        author: '', 
        title:'' , 
        text: '', 
        isDraft:true,
    },

       	getState() {
    		return this._State;
    	},

    

	updateTitle(title: string) {
		this._State.title = title
	},
    updateAuthor(author: string) {
		this._State.author = author
	},
    updateArticle(text: string) {
		this._State.text = text
	},

	_callSubscriber() {
   		console.log(
        { 
            author: this.getState().author,
            title: this.getState().title, 
            text: this.getState().text,
            isDraft: this.getState().isDraft,
         } 
    )
	},
}

	// let [localState, setLocalState] = useState(this._State.Profile.messageData);



