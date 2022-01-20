export interface ITodoForm {
    _id?: undefined | string,
    title: string,
    editorState: any,
    year: Date,
    isPublic: boolean,
    isComplete: boolean
}

export interface IEditPasswordUserForm {
    email: string,
}

export interface IResetPasswordUserForm {
    checkPassword?: string,
    newPassword: string
}

export interface IFilterForm {
    search: string,
    isPublic: boolean,
    isComplete: boolean
}

export interface ILoginForm {
    email: string,
    password: string
}

export interface IRegisterForm {
    username: string,
    email: string,
    password: string,
    checkPassword?: string
}

export interface IForgotPasswordForm {
    email: string,
    newPassword: string,
    checkPassword?: string
}
