export interface companyList {
    id: number,
    title: string,
    slug: string,
    category_id: number,
    description: string,
    target: number,
    started_at: string,
    finished_at: string,
    active: boolean,
    created_at: string,
    news: any,
    images: any,
}

export interface CompanyImages {
    id: number,
    name: string,
    description: string,
    mime_type: string,
    type: string,
    path: string,

}