export interface UserBrefInterface {
    ActiveGrade: number,
    address1: string,
    address2: string,
    address3: string,
    avatarUrl: string,
    firstName: string,
    gender: number,
    lastName: string,
    mainActivityArea: string,
    MemberGrade: number,
    mobile: string,
    nickName: string,
    PaidupMember: boolean,
    publicMobile: string,
    title: string,
    UserGrade: number,
    ValidateOverAt: string,
    ValidateStartAt: string
}

export interface ArticleInterface {
    favcount: number,
    handupcount: number,
    isfav: boolean,
    mainimage: string,
    recommend: boolean,
    stick: boolean,
    tags?: Array<any>,
    content: string,
    dateAdd: string,
    dateUpdate: string,
    id: number,
    subject: string,
    handdowncount: number
}

export interface ArticleDetailInterface {
    favcount: number,
    handupcount: number,
    isfav: boolean,
    content: string,
    htmlContent?: string,
    dateAdd: string,
    dateUpdate: string,
    id: number,
    handdowncount: number,
    //
    articleCategoryId: number,
    auximages: Array<any>,
    hits: number,

    isowner: boolean,
    mainimage: string,
    recommend: boolean,
    stick: boolean,
    subject: string,
    tags?: Array<any>,
    userbref?: UserBrefInterface
}
