export interface Acf {
    name?: string
    title?: string
    intro?: string
    footnotes?: string
    links?: Anchor[]
    social_links?: Socials
    components_react: ComponentsReact[]
}

export interface MenuTitles {
    name?: string
    title?: string
    intro?: string
    slug?: string
    links?: Anchor[]
}

export interface MenuSidebar {
    titles: MenuTitles
    sections: ComponentsReact[]
    socials_links: Socials[]
}

export interface ComponentsReact {
    about_me?: AboutMe
    acf_fc_layout: string
    section_title?: string
    section_intro?: string
    links?: Anchor[]
    entries:
        ExperienceEntry[] |
        ProjectEntry[] |
        SkillsEntry[] |
        AccoladeEntry[] |
        AboutEntry[] |
        OverviewEntry[]
}

export interface ExperienceEntry {
    id?: string | number
    company?: string
    job_title?: string
    links?: Anchor[]
    overview?: string
    skills?: Skill[]
    years?: Years[]
    wysiwyg?: string
}

export interface ProjectEntry {
    id?: string | number
    links?: Anchor[]
    project_company?: string
    project_image?: number
    project_image_link?: string
    project_intro?: string
    project_link?: string
    project_title?: string
    project_year?: string
    skills?: Skill[]
}

export interface SkillsEntry {
    id?: string
    icon?: string
    discipline?: string
    type?: SkillsType[]
}

export interface SkillsType {
    skills_type?: string
    skills?: Skill[]
}

export interface AccoladeEntry {
    id?: string | number
    accolade?: string
    attribution_image?: number
    attribution_image_link?: string
    attribution_name?: string
    attribution_title?: string
}

export interface AboutMe {
    image?: number
    location?: string
    links?: Anchor[]
}

export interface AboutEntry {
    acf_fc_layout: string
    wysiwyg?: string
}

export interface OverviewEntry {
    type?: string
    wysiwyg?: string
    code_block?: string
}

export interface Anchor {
    link_icon?: string
    link_text?: string
    link_url?: string
    link_target?: string
}

export interface Skill {
    id?: string
    skill?: string
    link?: string
}

export interface Years {
    start_year?: string
    end_year?: string
}

export interface Socials {
    linkedin?: string
    github?: string
    email?: string
}
