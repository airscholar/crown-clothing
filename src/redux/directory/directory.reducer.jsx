const INITIAL_STATE = {
    sections: [
        { id: 1, title: "HATS", subtitle: "SHOW NOW", imageUrl: "https://i.ibb.co/cvpntL1/hats.png", linkUrl: 'hats' },
        { id: 2, title: "JACKETS", subtitle: "SHOW NOW", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png", linkUrl: '' },
        { id: 3, title: "SNEAKERS", subtitle: "SHOW NOW", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png", linkUrl: '' },
        { id: 4, title: "WOMENS", subtitle: "SHOW NOW", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png", size: 'large', linkUrl: '' },
        { id: 5, title: "MENS", subtitle: "SHOW NOW", imageUrl: "https://i.ibb.co/R70vBrQ/men.png", size: 'large', linkUrl: '' },
    ]
}

export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}