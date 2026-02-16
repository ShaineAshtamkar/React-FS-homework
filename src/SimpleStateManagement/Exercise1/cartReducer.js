
export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const product = action.data;
            const newItem = { ...product, id: Date.now(), }
            return {
                items: state.items.concat(newItem),
                total: state.total + product.price,
                itemCount: state.itemCount + 1
            }
        }
        case "REMOVE_ITEM": {
            const productId = action.data
            const toBeRemovedItem = state.items.find(item => item.id == productId)

            if (!toBeRemovedItem) {
                return state
            }
            const newItems = state.items.filter((item) => item.id !== productId)

            return {
                items: newItems,
                total: state.total - toBeRemovedItem.price,
                itemCount: state.itemCount - 1
            }
        }
        case "CLEAR_CART": {
            return {
                items: [],
                total: 0,
                itemCount: 0
            }
        }


    }
    return state;
}