import { ArticleDetailInterface } from '../common/ts/index'

/**
 * viewArticle.state 参数类型
 *
 * @export
 * @interface ViewArticleState
 */
export interface ViewArticleState {
    dummy : string,
    shareToken : string
}

/**
 * viewArticle.props 参数类型
 *
 * @export
 * @interface ViewArticleProps
 */
export interface ViewArticleProps {
    dispatch?: any,
    articleDetail : ArticleDetailInterface,
    channel : string,
    articleId : number,
    token : string
}
