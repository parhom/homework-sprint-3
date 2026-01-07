const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeIdActionType): changeThemeIdType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

export type changeThemeIdType = {
    themeId: number
}

export type ThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}